<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <p>
      <slot name="type"></slot>
    </p>
    <div class="flex items-center mb-4">
      <slot name="title"></slot>
    </div>
    <div class="text-xs/4 text-neutral-500">
      <slot name="content"></slot>
    </div>
  </div>
</template>
