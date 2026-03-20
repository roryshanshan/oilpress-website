<template>
  <div class="floating-whatsapp" aria-label="WhatsApp contact buttons">
    <a
      class="whatsapp-btn"
      href="https://wa.me/8619906365856"
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp +86 199 0636 5856"
    >
      <span class="wa-label">WhatsApp</span>
      <span class="wa-number">+86 199 0636 5856</span>
    </a>
    <a
      class="whatsapp-btn"
      href="https://wa.me/8615615763222"
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp +86 156 1576 3222"
    >
      <span class="wa-label">WhatsApp</span>
      <span class="wa-number">+86 156 1576 3222</span>
    </a>
  </div>
</template>

<style scoped>
.floating-whatsapp {
  position: fixed;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10001;
}

.whatsapp-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  padding: 10px 12px;
  border-radius: 10px;
  background: #25d366;
  color: #ffffff;
  text-decoration: none;
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.35);
  border: 1px solid #1fa955;
  font-weight: 600;
  letter-spacing: 0.2px;
}

.whatsapp-btn:hover {
  background: #1fa955;
}

.wa-label {
  font-size: 14px;
  line-height: 1.2;
}

.wa-number {
  font-size: 12px;
  line-height: 1.2;
  opacity: 0.95;
}

@media (max-width: 768px) {
  .floating-whatsapp {
    right: 12px;
    top: auto;
    bottom: 120px;
    transform: none;
  }
  .whatsapp-btn {
    min-width: 120px;
    padding: 8px 10px;
  }
}
</style>
