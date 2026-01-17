        // Telif hakkı yılını otomatik olarak ayarla
        document.getElementById('copyright').textContent = `© ${new Date().getFullYear()} Berke Songul. Tüm hakları gizlidir.`;

        // Parçacık animasyonu - Matrix stili yeşil
        const canvas = document.getElementById('particles');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 100;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.fillStyle = 'rgba(0, 255, 65, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Parçacıklar arası bağlantılar
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(0, 255, 65, ${0.2 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Matrix Rain Transition (Düzeltildi)
        function navigateWithMatrix(url) {
            const container = document.getElementById('matrix-transition-container');
            
            // Eğer daha önce oluşturulmuş bir canvas varsa kaldır
            let matrixCanvas = document.getElementById('dynamic-matrix-canvas');
            if (matrixCanvas) {
                matrixCanvas.remove();
            }

            // Dinamik olarak yeni canvas oluştur ve kapsayıcıya ekle
            matrixCanvas = document.createElement('canvas');
            matrixCanvas.id = 'dynamic-matrix-canvas';
            container.appendChild(matrixCanvas);
            
            const matrixCtx = matrixCanvas.getContext('2d');
            matrixCanvas.width = window.innerWidth;
            matrixCanvas.height = window.innerHeight;

            // Container'ı etkinleştir
            container.classList.add('active');

            const columns = Math.floor(matrixCanvas.width / 20);
            const drops = Array(columns).fill(1);
            const chars = '010101010001010010101010101010000010010001001001010100101';

            function drawMatrix() {
                matrixCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

                matrixCtx.fillStyle = '#00ff41';
                matrixCtx.font = '15px monospace';

                for (let i = 0; i < drops.length; i++) {
                    const text = chars.charAt(Math.floor(Math.random() * chars.length));
                    matrixCtx.fillText(text, i * 20, drops[i] * 20);

                    if (drops[i] * 20 > matrixCanvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }
            }

            const interval = setInterval(drawMatrix, 33);

            setTimeout(() => {
                clearInterval(interval);
                window.location.href = url;
            }, 1000);
        }