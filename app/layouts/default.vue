<template>
  <div>
    <header class="border-b border-slate-800">
      <div class="container flex items-center justify-between py-4">
        <NuxtLink to="/" class="flex items-center gap-2">
          <Icon name="ph:lightning-bold" size="20" />
          <span class="font-semibold tracking-tight">IQC</span>
        </NuxtLink>
        <nav class="flex gap-6 text-sm">
          <NuxtLink to="/work">Work</NuxtLink>
          <NuxtLink to="/services">Services</NuxtLink>
          <NuxtLink to="/content">Content</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </nav>
      </div>
    </header>
    <main class="container py-12">
      <slot />
    </main>
    <footer class="border-t border-slate-800">
      <div class="container py-8 text-sm text-slate-400">© {{ new Date().getFullYear() }} IQC</div>
    </footer>
  </div>
</template>