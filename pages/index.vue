<template>
  <div>
    <section id="clipboard" class="border-2 border-solid border-red-500 mt-3">
      <div class="max-w-xs w-full space-y-3">
        <input id="hs-clipboard-input" type="text" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500" value="https://www.figma.com/community/file/1179068859697769656">
  
        <button
          type="button"
          ref="clipboardButton"
          class="js-clipboard-example py-3 px-4 group inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          data-clipboard-target="#hs-clipboard-input"
          data-clipboard-action="copy"
          data-clipboard-success-text="Copied"
        >
          <svg
            class="js-clipboard-default size-4 group-hover:rotate-6 transition"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          </svg>
  
          <svg class="js-clipboard-success hidden size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span class="js-clipboard-success-text">Copy</span>
        </button>
      </div>
    </section>
    <section id="dropdown" class="border-2 border-solid border-red-500 mt-3 flex gap-3">

      <div class="hs-dropdown relative inline-flex">
  <button id="hs-dropdown-default" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    Actions
    <svg class="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </button>

  <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="hs-dropdown-default">
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
      Newsletter
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
      Purchases
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
      Downloads
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
      Team Account
    </a>
  </div>
</div>

<div class="hs-dropdown relative inline-flex">
  <button id="hs-dropdown-with-dividers" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    Actions
    <svg class="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </button>

  <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200" aria-labelledby="hs-dropdown-with-dividers">
    <div class="py-2 first:pt-0 last:pb-0">
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
        Newsletter
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
        Purchases
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
        Downloads
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
        Team Account
      </a>
    </div>
    <div class="py-2 first:pt-0 last:pb-0">
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
        Upgrade License
      </a>
    </div>
    <div class="py-2 first:pt-0 last:pb-0">
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
        Account Settings
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
        Sign out
      </a>
    </div>
  </div>
</div>

<div class="hs-dropdown relative inline-flex">
  <button id="hs-dropdown-with-icons" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    Actions
    <svg class="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </button>

  <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200" aria-labelledby="hs-dropdown-with-icons">
    <div class="py-2 first:pt-0 last:pb-0">
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
        Newsletter
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        Purchases
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
        Downloads
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        Team Account
      </a>
    </div>
  </div>
</div>
</section>
<section id="modal" class="border-2 border-solid border-red-500 mt-3">
  <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-basic-modal">
  Open modal
</button>

<div id="hs-basic-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none">
  <div class="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
    <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
      <div class="flex justify-between items-center py-3 px-4 border-b">
        <h3 class="font-bold text-gray-800">
          Modal title
        </h3>
        <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-basic-modal">
          <span class="sr-only">Close</span>
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <div class="p-4 overflow-y-auto">
        <p class="mt-1 text-gray-800">
          This is a wider card with supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-basic-modal">
          Close
        </button>
        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
</section>
<section id="popover" class="border-2 border-solid border-red-500 mt-3 flex justify-center flex-col">
  <!-- Popover -->
<div class="hs-tooltip inline-block [--trigger:click] [--placement:left]">
  <button type="button" class="hs-tooltip-toggle flex justify-center items-center size-10 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m15 18-6-6 6-6"></path>
    </svg>
    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-lg shadow-md" role="tooltip">
      Left popover
    </span>
  </button>
</div>
<!-- End Popover -->

<!-- Popover -->
<div class="hs-tooltip inline-block [--trigger:click]">
  <button type="button" class="hs-tooltip-toggle flex justify-center items-center size-10 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m18 15-6-6-6 6"></path>
    </svg>
    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-lg shadow-md" role="tooltip">
      Top popover
    </span>
  </button>
</div>
<!-- End Popover -->

<!-- Popover -->
<div class="hs-tooltip inline-block [--trigger:click] [--placement:bottom]">
  <button type="button" class="hs-tooltip-toggle flex justify-center items-center size-10 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m6 9 6 6 6-6"></path>
    </svg>
    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-lg shadow-md" role="tooltip">
      Bottom popover
    </span>
  </button>
</div>
<!-- End Popover -->

<!-- Popover -->
<div class="hs-tooltip inline-block [--trigger:click] [--placement:right]">
  <button type="button" class="hs-tooltip-toggle flex justify-center items-center size-10 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m9 18 6-6-6-6"></path>
    </svg>
    <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-lg shadow-md" role="tooltip">
      Right popover
    </span>
  </button>
</div>
<!-- End Popover -->
<!-- User -->
<div class="hs-tooltip inline-block [--trigger:hover] sm:[--placement:right]">
  <div class="hs-tooltip-toggle max-w-xs p-3 flex items-center gap-x-3 bg-white border border-gray-200 rounded-xl shadow-sm">
    <img class="inline-block size-9 rounded-full" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80" alt="Image Description">

    <!-- User Content -->
    <div class="grow">
      <h4 class="font-semibold text-sm text-gray-800">
        Amanda Harvey
      </h4>
      <p class="text-sm text-gray-800 md:text-gray-500 md:">
        amanda@email.com
      </p>
    </div>
    <!-- End User Content -->

    <!-- Popover Content -->
    <div class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10 max-w-xs w-full bg-white border border-gray-100 text-start rounded-xl shadow-md after:absolute after:top-0 after:-start-4 after:w-4 after:h-full" role="tooltip">
      <!-- Header -->
      <div class="py-3 px-4 border-b border-gray-200">
        <div class="flex items-center gap-x-3">
          <img class="flex-shrink-0 inline-block size-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80" alt="Image Description">
          <div class="grow">
            <h4 class="font-semibold text-gray-800">
              Amanda Harvey
              <span class="ms-0.5 inline-flex items-center align-middle gap-x-1.5 py-0.5 px-1.5 rounded-md text-[11px] font-medium bg-gray-800 text-white">
                PRO
              </span>
            </h4>
            <p class="text-sm text-gray-500">
              Storyteller
            </p>
          </div>
        </div>
      </div>
      <!-- End Header -->

      <!-- List -->
      <ul class="py-3 px-4 space-y-1">
        <li>
          <div class="inline-flex items-center gap-x-3 text-sm text-gray-800">
            <svg class="flex-shrink-0 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
              <path d="M10 6h4"></path>
              <path d="M10 10h4"></path>
              <path d="M10 14h4"></path>
              <path d="M10 18h4"></path>
            </svg>
            Pixeel Ltd.
          </div>
        </li>

        <li>
          <div class="inline-flex items-center gap-x-3 text-sm text-gray-800">
            <svg class="flex-shrink-0 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
              <path d="M12 18h.01"></path>
            </svg>
            (892) 312-5483
          </div>
        </li>

        <li>
          <div class="inline-flex items-center gap-x-3 text-sm text-gray-800">
            <svg class="flex-shrink-0 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            amanda@email.com
          </div>
        </li>
      </ul>
      <!-- End List -->

      <!-- Footer -->
      <div class="py-2 px-4 flex justify-between items-center bg-gray-100">
        <a class="inline-flex items-center gap-x-1.5 text-xs text-gray-500 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none" href="#">
          <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
            <line x1="4" x2="4" y1="22" y2="15"></line>
          </svg>
          Flag
        </a>

        <button type="button" class="py-1.5 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          Follow
        </button>
      </div>
      <!-- End Footer -->
    </div>
    <!-- End Popover Content -->
  </div>
</div>
<!-- End User -->
<!-- Popover -->
<div class="hs-tooltip inline-block [--trigger:click]">
  <div class="hs-tooltip-toggle block text-center">
    <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">
      Preline review
      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m18 15-6-6-6 6"></path>
      </svg>
    </button>

    <div class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10 max-w-xs w-full bg-white border border-gray-100 text-start rounded-xl shadow-md" role="tooltip">
      <div class="p-4">
        <!-- Header -->
        <div class="mb-3 flex justify-between items-center gap-x-3">
          <div class="flex items-center gap-x-2">
            <h4 class="font-semibold text-gray-800">
              5.0
            </h4>

            <!-- Rating -->
            <div class="flex">
              <svg class="flex-shrink-0 size-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
              <svg class="flex-shrink-0 size-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
              <svg class="flex-shrink-0 size-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
              <svg class="flex-shrink-0 size-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
              <svg class="flex-shrink-0 size-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
            </div>
            <!-- End Rating -->
          </div>

          <a class="inline-flex items-center gap-x-1 text-xs text-blue-600 decoration-2 hover:underline font-medium" href="#">
            See all (4)
          </a>
        </div>
        <!-- End Header -->

        <div class="mb-3">
          <!-- Progress -->
          <div class="flex items-center gap-x-3 whitespace-nowrap">
            <div class="w-10 text-end">
              <span class="text-sm text-gray-800">5 star</span>
            </div>
            <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">
              <div class="flex flex-col justify-center rounded-full overflow-hidden bg-yellow-400 text-xs text-white text-center whitespace-nowrap transition duration-500" style="width: 78%"></div>
            </div>
            <div class="w-10 text-end">
              <span class="text-sm text-gray-800">78%</span>
            </div>
          </div>
          <!-- End Progress -->

          <!-- Progress -->
          <div class="flex items-center gap-x-3 whitespace-nowrap">
            <div class="w-10 text-end">
              <span class="text-sm text-gray-800">4 star</span>
            </div>
            <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
              <div class="flex flex-col justify-center rounded-full overflow-hidden bg-yellow-400 text-xs text-white text-center whitespace-nowrap transition duration-500" style="width: 20%"></div>
            </div>
            <div class="w-10 text-end">
              <span class="text-sm text-gray-800">20%</span>
            </div>
          </div>
          <!-- End Progress -->

          <!-- Progress -->
          <div class="flex items-center gap-x-3 whitespace-nowrap">
            <div class="w-10 text-end">
              <span class="text-sm text-gray-800">3 star</span>
            </div>
            <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="6" aria-valuemin="0" aria-valuemax="100">
              <div class="flex flex-col justify-center rounded-full overflow-hidden bg-yellow-400 text-xs text-white text-center whitespace-nowrap transition duration-500" style="width: 6%"></div>
            </div>
            <div class="w-10 text-end">
              <span class="text-sm text-gray-800">6%</span>
            </div>
          </div>
          <!-- End Progress -->

          <!-- Progress -->
          <div class="flex items-center gap-x-3 whitespace-nowrap">
            <div class="w-10 text-end">
              <span class="text-sm text-gray-800">2 star</span>
            </div>
            <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="flex flex-col justify-center rounded-full overflow-hidden bg-yellow-400 text-xs text-white text-center whitespace-nowrap transition duration-500" style="width: 2%"></div>
            </div>
            <div class="w-10 text-end">
              <span class="text-sm text-gray-800">2%</span>
            </div>
          </div>
          <!-- End Progress -->

          <!-- Progress -->
          <div class="flex items-center gap-x-3 whitespace-nowrap">
            <div class="w-10 text-end">
              <span class="text-sm text-gray-800">1 star</span>
            </div>
            <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
              <div class="flex flex-col justify-center rounded-full overflow-hidden bg-yellow-400 text-xs text-white text-center whitespace-nowrap transition duration-500" style="width: 0%"></div>
            </div>
            <div class="w-10 text-end">
              <span class="text-sm text-gray-800">0%</span>
            </div>
          </div>
          <!-- End Progress -->
        </div>

        <a class="inline-flex items-center gap-x-1 text-xs text-gray-600 decoration-2 hover:underline" href="#">
          How reviews and ratings work
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
<!-- End Popover -->
</section>
<section id="toolitup" class="border-2 border-solid border-red-500 mt-3 flex justify-center flex-col">
  <!-- Grid -->
<div class="grid grid-cols-3 gap-y-4 gap-x-2 max-w-60 mx-auto">
  <div class="col-start-2 text-center">
    <div class="hs-tooltip inline-block">
      <button type="button" class="hs-tooltip-toggle size-10 inline-flex justify-center items-center gap-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m18 15-6-6-6 6"></path>
        </svg>
        <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm" role="tooltip">
          Tooltip on top
        </span>
      </button>
    </div>
  </div>
  <!-- End Col -->

  <!-- Col -->
  <div class="col-start-1 text-end">
    <div class="hs-tooltip inline-block [--placement:left]">
      <button type="button" class="hs-tooltip-toggle size-10 inline-flex justify-center items-center gap-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm" role="tooltip">
          Tooltip on left
        </span>
      </button>
    </div>
  </div>
  <!-- End Col -->

  <!-- Col -->
  <div class="col-start-3">
    <div class="hs-tooltip inline-block [--placement:right]">
      <button type="button" class="hs-tooltip-toggle size-10 inline-flex justify-center items-center gap-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
        <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm" role="tooltip">
          Tooltip on right
        </span>
      </button>
    </div>
  </div>
  <!-- End Col -->

  <!-- Col -->
  <div class="col-start-2 text-center">
    <div class="hs-tooltip inline-block [--placement:bottom]">
      <button type="button" class="hs-tooltip-toggle size-10 inline-flex justify-center items-center gap-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6"></path>
        </svg>
        <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm" role="tooltip">
          Tooltip on bottom
        </span>
      </button>
    </div>
  </div>
  <!-- End Col -->
</div>
<!-- End Grid -->
</section>
<section id="canva" class="border-2 border-solid border-red-500 mt-3 flex justify-center flex-col">
  <button type="button" class="m-1 ms-0 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-overlay-top">
  Toggle top offcanvas
</button>

<div id="hs-overlay-top" class="hs-overlay hs-overlay-open:translate-y-0 -translate-y-full fixed top-0 inset-x-0 transition-all duration-300 transform max-h-40 size-full z-[80] bg-white border-b hidden" tabindex="-1">
  <div class="flex justify-between items-center py-3 px-4 border-b">
    <h3 class="font-bold text-gray-800">
      Offcanvas title
    </h3>
    <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-overlay-top">
      <span class="sr-only">Close modal</span>
      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    </button>
  </div>
  <div class="p-4">
    <p class="text-gray-800">
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
</div>

<button type="button" class="m-1 ms-0 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-overlay-right">
  Toggle right offcanvas
</button>

<div id="hs-overlay-right" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-s" tabindex="-1">
  <div class="flex justify-between items-center py-3 px-4 border-b">
    <h3 class="font-bold text-gray-800">
      Offcanvas title
    </h3>
    <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-overlay-right">
      <span class="sr-only">Close modal</span>
      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    </button>
  </div>
  <div class="p-4">
    <p class="text-gray-800">
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
</div>

<button type="button" class="m-1 ms-0 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-overlay-bottom">
  Toggle bottom offcanvas
</button>

<div id="hs-overlay-bottom" class="hs-overlay hs-overlay-open:translate-y-0 translate-y-full fixed bottom-0 inset-x-0 transition-all duration-300 transform max-h-40 size-full z-[80] bg-white border-b hidden" tabindex="-1">
  <div class="flex justify-between items-center py-3 px-4 border-b">
    <h3 class="font-bold text-gray-800">
      Offcanvas title
    </h3>
    <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-overlay-bottom">
      <span class="sr-only">Close modal</span>
      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    </button>
  </div>
  <div class="p-4">
    <p class="text-gray-800">
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
</div>
<button type="button" class="m-1 ms-0 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-overlay-body-scrolling">
  Body scrolling (no backdrop)
</button>

<div id="hs-overlay-body-scrolling" class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-e [--body-scroll:true] [--overlay-backdrop:false]" tabindex="-1">
  <div class="flex justify-between items-center py-3 px-4 border-b">
    <h3 class="font-bold text-gray-800">
      Body scrolling (no backdrop)
    </h3>
    <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-overlay-body-scrolling">
      <span class="sr-only">Close modal</span>
      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    </button>
  </div>
  <div class="p-4">
    <p class="text-gray-800">
      Try scrolling the rest of the page to see this option in action.
    </p>
  </div>
</div>

<button type="button" class="m-1 ms-0 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-overlay-backdrop-with-scrolling">
  Body scrolling with backdrop
</button>

<div id="hs-overlay-backdrop-with-scrolling" class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-e [--body-scroll:true]" tabindex="-1">
  <div class="flex justify-between items-center py-3 px-4 border-b">
    <h3 class="font-bold text-gray-800">
      Body scrolling with backdrop
    </h3>
    <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-overlay-backdrop-with-scrolling">
      <span class="sr-only">Close modal</span>
      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    </button>
  </div>
  <div class="p-4">
    <p class="text-gray-800">
      Try scrolling the rest of the page to see this option in action.
    </p>
  </div>
</div>
<button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-custom-backdrop-offcanvas">
  Open offcanvas
</button>

<div id="hs-custom-backdrop-offcanvas" class="hs-overlay hs-overlay-open:translate-x-0 hs-overlay-backdrop-open:bg-blue-950/90 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-e" tabindex="-1">
  <div class="flex justify-between items-center py-3 px-4 border-b">
    <h3 class="font-bold text-gray-800">
      Offcanvas title
    </h3>
    <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-custom-backdrop-offcanvas">
      <span class="sr-only">Close modal</span>
      <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    </button>
  </div>
  <div class="p-4">
    <p class="text-gray-800">
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
</div>
  </section>
  <section id="image" class="border-2 border-solid border-red-500 mt-3 flex justify-center flex-col">
<!-- Grid -->
<div class="grid sm:grid-cols-12 gap-3">
  <div class="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
    <!-- Card -->
    <a class="group relative block rounded-xl overflow-hidden" href="#">
      <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
        <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3481&q=80" alt="Image Description">
      </div>
      <div class="absolute bottom-0 start-0 end-0 p-2">
        <div class="font-semibold text-gray-800 rounded-lg bg-white p-3">
          Workplace personalities
        </div>
      </div>
    </a>
    <!-- End Card -->
  </div>
  <!-- End Col -->

  <div class="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
    <!-- Card -->
    <a class="group relative block rounded-xl overflow-hidden" href="#">
      <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
        <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description">
      </div>
      <div class="absolute bottom-0 start-0 end-0 p-2">
        <div class="font-semibold text-gray-800 rounded-lg bg-white p-3">
          Women in engineering
        </div>
      </div>
    </a>
    <!-- End Card -->
  </div>
  <!-- End Col -->

  <div class="col-span-12 md:col-span-4">
    <!-- Card -->
    <a class="group relative block rounded-xl overflow-hidden" href="#">
      <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
        <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description">
      </div>
      <div class="absolute bottom-0 start-0 end-0 p-2">
        <div class="font-semibold text-gray-800 rounded-lg bg-white p-3">
          Pride 2021
        </div>
      </div>
    </a>
    <!-- End Card -->
  </div>
  <!-- End Col -->

  <div class="col-span-12 sm:col-span-6 md:col-span-4">
    <!-- Card -->
    <a class="group relative block rounded-xl overflow-hidden" href="#">
      <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
        <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1598929438701-ef29ab0bb61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="Image Description">
      </div>
      <div class="absolute bottom-0 start-0 end-0 p-2">
        <div class="font-semibold text-gray-800 rounded-lg bg-white p-3">
          Data at Preline
        </div>
      </div>
    </a>
    <!-- End Card -->
  </div>
  <!-- End Col -->

  <div class="col-span-12 sm:col-span-6 md:col-span-4">
    <!-- Card -->
    <a class="group relative block rounded-xl overflow-hidden" href="#">
      <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
        <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1019&q=80" alt="Image Description">
      </div>
      <div class="absolute bottom-0 start-0 end-0 p-2">
        <div class="font-semibold text-gray-800 rounded-lg bg-white p-3">
          Empowered management
        </div>
      </div>
    </a>
    <!-- End Card -->
  </div>
  <!-- End Col -->
</div>
<!-- End Grid -->
    </section>
    <section id="avatar" class="border-2 border-solid border-red-500 mt-3 ">
      <h1>Avatar</h1>
      <div class="relative inline-block">
  <img class="inline-block size-8 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description">
  <span class="absolute bottom-0 end-0 block size-1.5 rounded-full ring-2 ring-white bg-gray-400"></span>
</div>
<div class="relative inline-block">
  <img class="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description">
  <span class="absolute bottom-0 end-0 block size-2.5 rounded-full ring-2 ring-white bg-red-400"></span>
</div>
<div class="relative inline-block">
  <img class="inline-block size-[46px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description">
  <span class="absolute bottom-0 end-0 block size-3 rounded-full ring-2 ring-white bg-teal-400"></span>
</div>
<div class="relative inline-block">
  <img class="inline-block size-[62px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description">
  <span class="absolute bottom-0 end-0 block size-3.5 rounded-full ring-2 ring-white bg-yellow-400"></span>
</div>
<h1>Avatar group</h1>

</section>
<section id="staticicon" class="border-2 border-solid border-red-500 mt-3 ">
 <h1>static icon</h1>
  <!-- Icon -->
<span class="inline-flex justify-center items-center size-[46px] rounded-full text-blue-600">
  <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
</span>
<!-- End Icon -->

<!-- Icon -->
<span class="inline-flex justify-center items-center size-[46px] rounded-full bg-blue-600 text-white">
  <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
</span>
<!-- End Icon -->

<!-- Icon -->
<span class="inline-flex justify-center items-center size-[46px] rounded-full bg-blue-100 text-blue-800">
  <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
</span>
<!-- End Icon -->

<!-- Icon -->
<span class="inline-flex justify-center items-center size-[46px] rounded-full border-4 border-blue-100 bg-blue-200 text-blue-800">
  <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
</span>
<!-- End Icon -->

<!-- Icon -->
<span class="inline-flex justify-center items-center size-[46px] rounded-full border border-blue-600 text-blue-600">
  <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
</span>
<!-- End Icon -->

<!-- Icon -->
<span class="inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm">
  <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
</span>
<!-- End Icon -->
</section>
  
  <section id="ratingpage" class="border-2 border-solid border-red-500 mt-3 flex justify-center ">
    <!-- Rating -->
    <h1>page rating</h1>
<div class="flex flex-row-reverse justify-end items-center">
  <input id="hs-ratings-readonly-1" type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="1">
  <label for="hs-ratings-readonly-1" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none">
    <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
    </svg>
  </label>
  <input id="hs-ratings-readonly-2" type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="2">
  <label for="hs-ratings-readonly-2" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none">
    <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
    </svg>
  </label>
  <input id="hs-ratings-readonly-3" type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="3">
  <label for="hs-ratings-readonly-3" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none">
    <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
    </svg>
  </label>
  <input id="hs-ratings-readonly-4" type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="4">
  <label for="hs-ratings-readonly-4" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none">
    <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
    </svg>
  </label>
  <input id="hs-ratings-readonly-5" type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="5">
  <label for="hs-ratings-readonly-5" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none">
    <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
    </svg>
  </label>
</div>
<!-- End Rating -->
  </section>
  <section id="skeleton" class="border-2 border-solid border-red-500 mt-3 ">
    <div class="flex animate-pulse">
  <div class="flex-shrink-0">
    <span class="size-12 block bg-gray-200 rounded-full"></span>
  </div>

  <div class="ms-4 mt-2 w-full">
    <p class="h-4 bg-gray-200 rounded-full" style="width: 40%;"></p>

    <ul class="mt-5 space-y-3">
      <li class="w-full h-4 bg-gray-200 rounded-full"></li>
      <li class="w-full h-4 bg-gray-200 rounded-full"></li>
      <li class="w-full h-4 bg-gray-200 rounded-full"></li>
      <li class="w-full h-4 bg-gray-200 rounded-full"></li>
    </ul>
  </div>
</div>
  </section>
  
  <section id="spinners" class="border-2 border-solid border-red-500 mt-3 ">
    <h1 class="text-center">Spinners</h1>
    <div class="min-h-60 flex flex-col bg-white border shadow-sm rounded-xl">
  <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
    <div class="flex justify-center">
      <div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</div>
<div class="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>

<div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>

<div class="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>
<div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-gray-800 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>

<div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-gray-400 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>

<div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-red-600 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>

<div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-yellow-600 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>

<div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-green-600 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>

<div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>

<div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-indigo-600 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>

<div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-purple-600 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>

<div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-pink-600 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>

<div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-orange-600 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>

<div class="relative">
  <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="flex-shrink-0 size-4 text-blue-600 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
          <path d="M12 9v4"></path>
          <path d="M12 17h.01"></path>
        </svg>
      </div>
      <div class="ms-3">
        <h3 class="text-sm text-blue-800 font-medium">
          Attention needed
        </h3>
        <div class="text-sm text-blue-700 mt-2">
          <span class="font-semibold">Holy guacamole!</span> You should check in on some of those fields below.
        </div>
      </div>
    </div>
  </div>

  <div class="absolute top-0 start-0 size-full bg-white/50 rounded-lg"></div>

  <div class="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</div>
  </section>
  <section id="steper" class="border-2 border-solid border-red-500 mt-3 ">
    <!-- Stepper -->
<ul class="relative flex flex-row gap-x-2">
  <!-- Item -->
  <li class="shrink basis-0 flex-1 group">
    <div class="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
      <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
        1
      </span>
      <div class="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
    </div>
    <div class="mt-3">
      <span class="block text-sm font-medium text-gray-800">
        Step
      </span>
    </div>
  </li>
  <!-- End Item -->

  <!-- Item -->
  <li class="shrink basis-0 flex-1 group">
    <div class="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
      <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
        2
      </span>
      <div class="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
    </div>
    <div class="mt-3">
      <span class="block text-sm font-medium text-gray-800">
        Step
      </span>
    </div>
  </li>
  <!-- End Item -->

  <!-- Item -->
  <li class="shrink basis-0 flex-1 group">
    <div class="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
      <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
        3
      </span>
      <div class="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
    </div>
    <div class="mt-3">
      <span class="block text-sm font-medium text-gray-800">
        Step
      </span>
    </div>
  </li>
  <!-- End Item -->
</ul>
<!-- End Stepper -->
<!-- Stepper -->
<ul class="relative flex flex-col md:flex-row gap-2">
  <!-- Item -->
  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
        1
      </span>
      <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
    </div>
    <div class="grow md:grow-0 md:mt-3 pb-5">
      <span class="block text-sm font-medium text-gray-800">
        Step
      </span>
      <p class="text-sm text-gray-500">
        This is a description text.
      </p>
    </div>
  </li>
  <!-- End Item -->

  <!-- Item -->
  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
        2
      </span>
      <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
    </div>
    <div class="grow md:grow-0 md:mt-3 pb-5">
      <span class="block text-sm font-medium text-gray-800">
        Step
      </span>
      <p class="text-sm text-gray-500">
        This is a description text.
      </p>
    </div>
  </li>
  <!-- End Item -->

  <!-- Item -->
  <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
    <div class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
      <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
        3
      </span>
      <div class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden"></div>
    </div>
    <div class="grow md:grow-0 md:mt-3 pb-5">
      <span class="block text-sm font-medium text-gray-800">
        Step
      </span>
      <p class="text-sm text-gray-500">
        This is a description text.
      </p>
    </div>
  </li>
  <!-- End Item -->
</ul>
<!-- End Stepper -->

<!-- Stepper -->
<div data-hs-stepper="">
  <!-- Stepper Nav -->
  <ul class="relative flex flex-row gap-x-2">
    <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{
      "index": 1
    }'>
      <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
        <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
          <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
          <svg class="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span class="ms-2 text-sm font-medium text-gray-800">
          Step
        </span>
      </span>
      <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
    </li>

    <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{
      "index": 2
    }'>
      <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
        <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
          <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
          <svg class="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span class="ms-2 text-sm font-medium text-gray-800">
          Step
        </span>
      </span>
      <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
    </li>

    <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{
        "index": 3
      }'>
      <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
        <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
          <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
          <svg class="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span class="ms-2 text-sm font-medium text-gray-800">
          Step
        </span>
      </span>
      <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
    </li>
    <!-- End Item -->
  </ul>
  <!-- End Stepper Nav -->

  <!-- Stepper Content -->
  <div class="mt-5 sm:mt-8">
    <!-- First Contnet -->
    <div data-hs-stepper-content-item='{
      "index": 1
    }'>
      <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
        <h3 class="text-gray-500">
          First content
        </h3>
      </div>
    </div>
    <!-- End First Contnet -->

    <!-- First Contnet -->
    <div data-hs-stepper-content-item='{
      "index": 2
    }' style="display: none;">
      <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
        <h3 class="text-gray-500">
          Second content
        </h3>
      </div>
    </div>
    <!-- End First Contnet -->

    <!-- First Contnet -->
    <div data-hs-stepper-content-item='{
      "index": 3
    }' style="display: none;">
      <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
        <h3 class="text-gray-500">
          Third content
        </h3>
      </div>
    </div>
    <!-- End First Contnet -->

    <!-- Final Contnet -->
    <div data-hs-stepper-content-item='{
      "isFinal": true
    }' style="display: none;">
      <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
        <h3 class="text-gray-500">
          Final content
        </h3>
      </div>
    </div>
    <!-- End Final Contnet -->

    <!-- Button Group -->
    <div class="mt-5 flex justify-between items-center gap-x-2">
      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-back-btn="">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        Back
      </button>
      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn="">
        Next
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-finish-btn="" style="display: none;">
        Finish
      </button>
      <button type="reset" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-reset-btn="" style="display: none;">
        Reset
      </button>
    </div>
    <!-- End Button Group -->
  </div>
  <!-- End Stepper Content -->
</div>
<!-- End Stepper -->

<!-- Stepper -->
<div data-hs-stepper='{
  "mode": "non-linear"
}'>
  <!-- Stepper Nav -->
  <ul class="relative flex flex-row gap-x-2">
    <!-- Item -->
    <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group active" data-hs-stepper-nav-item='{
      "index": 1
    }'>
      <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
        <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
          <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
          <svg class="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span class="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500">
          Step
        </span>
      </span>
      <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
    </li>
    <!-- End Item -->

    <!-- Item -->
    <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{
      "index": 2
    }'>
      <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
        <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
          <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
          <svg class="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span class="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500">
          Step
        </span>
      </span>
      <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
    </li>
    <!-- End Item -->

    <!-- Item -->
    <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group" data-hs-stepper-nav-item='{
      "index": 3
    }'>
      <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
        <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
          <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
          <svg class="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span class="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500">
          Step
        </span>
      </span>
      <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
    </li>
    <!-- End Item -->
  </ul>
  <!-- End Stepper Nav -->

  <!-- Stepper Content -->
  <div class="mt-5 sm:mt-8">
    <!-- First Content -->
    <div data-hs-stepper-content-item='{
      "index": 1
    }' style="display: none;">
      <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
        <h3 class="text-gray-500">
          First content
        </h3>
      </div>
    </div>
    <!-- End First Content -->

    <!-- Second Content -->
    <div data-hs-stepper-content-item='{
      "index": 2
    }' style="display: none;">
      <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
        <h3 class="text-gray-500">
          Second content
        </h3>
      </div>
    </div>
    <!-- End Second Content -->

    <!-- Third Content -->
    <div data-hs-stepper-content-item='{
      "index": 3
    }' style="display: none;">
      <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
        <h3 class="text-gray-500">
          Third content
        </h3>
      </div>
    </div>
    <!-- End Third Content -->

    <!-- Final Content -->
    <div data-hs-stepper-content-item='{
      "isFinal": true
    }'>
      <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
        <h3 class="text-gray-500">
          Final content
        </h3>
      </div>
    </div>
    <!-- End Final Content -->

    <div class="mt-5 flex justify-between items-center gap-x-2">
      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-back-btn="">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        Back
      </button>
      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-skip-btn="" style="display: none;">
        Skip
      </button>
      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-complete-step-btn='{
        "completedText": "This step is completed"
      }'>
        Complete Step
      </button>
      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn="">
        Next
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-finish-btn="" style="display: none;">
        Finish
      </button>
      <button type="reset" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-reset-btn="" style="display: none;">
        Reset
      </button>
    </div>
  </div>
  <!-- End Stepper Content -->
</div>
<!-- Stepper -->

<!-- Stepper -->
<div data-hs-stepper='{
  "isCompleted": true
}' class="completed">
  <!-- Stepper Nav -->
  <ul class="relative flex flex-row gap-x-2">
    <!-- Item -->
    <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group success" data-hs-stepper-nav-item='{
      "index": 1,
      "isCompleted": true
    }'>
      <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
        <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
          <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
          <svg class="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span class="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500">
          Step
        </span>
      </span>
      <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
    </li>
    <!-- End Item -->

    <!-- Item -->
    <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group success" data-hs-stepper-nav-item='{
      "index": 2,
      "isCompleted": true
    }'>
      <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
        <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
          <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
          <svg class="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span class="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500">
          Step
        </span>
      </span>
      <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
    </li>
    <!-- End Item -->

    <!-- Item -->
    <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group active success" data-hs-stepper-nav-item='{
      "index": 3,
      "isCompleted": true
    }'>
      <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
        <span class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
          <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
          <svg class="hidden flex-shrink-0 size-3 hs-stepper-success:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span class="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500">
          Step
        </span>
      </span>
      <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
    </li>
    <!-- End Item -->
  </ul>
  <!-- End Stepper Nav -->

  <!-- Stepper Content -->
  <div class="mt-5 sm:mt-8">
    <!-- First Content -->
    <div data-hs-stepper-content-item='{
      "index": 1,
      "isCompleted": true
    }' style="display: none;">
      <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
        <h3 class="text-gray-500">
          First content
        </h3>
      </div>
    </div>
    <!-- End First Content -->

    <!-- Second Content -->
    <div data-hs-stepper-content-item='{
      "index": 2,
      "isCompleted": true
    }' style="display: none;">
      <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
        <h3 class="text-gray-500">
          Second content
        </h3>
      </div>
    </div>
    <!-- End Second Content -->

    <!-- Third Content -->
    <div data-hs-stepper-content-item='{
      "index": 3,
      "isCompleted": true
    }' style="display: none;">
      <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
        <h3 class="text-gray-500">
          Third content
        </h3>
      </div>
    </div>
    <!-- End Third Content -->

    <!-- Final Content -->
    <div data-hs-stepper-content-item='{
      "isFinal": true
    }'>
      <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl">
        <h3 class="text-gray-500">
          Final content
        </h3>
      </div>
    </div>
    <!-- End Final Content -->

    <div class="mt-5 flex justify-between items-center gap-x-2">
      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-back-btn="" style="display: none;">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        Back
      </button>
      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-next-btn="" style="display: none;">
        Next
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-finish-btn="" style="display: none;">
        Finish
      </button>
      <button type="reset" class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-stepper-reset-btn="">
        Reset
      </button>
    </div>
  </div>
  <!-- End Stepper Content -->
</div>
<!-- End Stepper -->
  </section>
  <section id="timeline" class="border-2 border-solid border-red-500 mt-3 ">
    <!-- Timeline -->
<div>
  <!-- Heading -->
  <div class="ps-2 my-2 first:mt-0">
    <h3 class="text-xs font-medium uppercase text-gray-500">
      1 Aug, 2023
    </h3>
  </div>
  <!-- End Heading -->

  <!-- Item -->
  <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100">
    <a class="absolute inset-0 z-[1]" href="#"></a>

    <!-- Icon -->
    <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
      <div class="relative z-10 size-7 flex justify-center items-center">
        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"></div>
      </div>
    </div>
    <!-- End Icon -->

    <!-- Right Content -->
    <div class="grow p-2 pb-8">
      <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
        <svg class="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" x2="8" y1="13" y2="13"></line>
          <line x1="16" x2="8" y1="17" y2="17"></line>
          <line x1="10" x2="8" y1="9" y2="9"></line>
        </svg>
        Created "Preline in React" task
      </h3>
      <p class="mt-1 text-sm text-gray-600">
        Find more detailed insctructions here.
      </p>
      <button type="button" class="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none">
        <img class="flex-shrink-0 size-4 rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description">
        James Collins
      </button>
    </div>
    <!-- End Right Content -->
  </div>
  <!-- End Item -->

  <!-- Item -->
  <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100">
    <a class="absolute inset-0 z-[1]" href="#"></a>

    <!-- Icon -->
    <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
      <div class="relative z-10 size-7 flex justify-center items-center">
        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"></div>
      </div>
    </div>
    <!-- End Icon -->

    <!-- Right Content -->
    <div class="grow p-2 pb-8">
      <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
        Release v5.2.0 quick bug fix 🐞
      </h3>
      <button type="button" class="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none">
        <span class="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full">
          A
        </span>
        Alex Gregarov
      </button>
    </div>
    <!-- End Right Content -->
  </div>
  <!-- End Item -->

  <!-- Item -->
  <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100">
    <a class="absolute inset-0 z-[1]" href="#"></a>

    <!-- Icon -->
    <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
      <div class="relative z-10 size-7 flex justify-center items-center">
        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"></div>
      </div>
    </div>
    <!-- End Icon -->

    <!-- Right Content -->
    <div class="grow p-2 pb-8">
      <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
        Marked "Install Charts" completed
      </h3>
      <p class="mt-1 text-sm text-gray-600">
        Finally! You can check it out here.
      </p>
      <button type="button" class="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none">
        <img class="flex-shrink-0 size-4 rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description">
        James Collins
      </button>
    </div>
    <!-- End Right Content -->
  </div>
  <!-- End Item -->

  <!-- Heading -->
  <div class="ps-2 my-2 first:mt-0">
    <h3 class="text-xs font-medium uppercase text-gray-500">
      31 Jul, 2023
    </h3>
  </div>
  <!-- End Heading -->

  <!-- Item -->
  <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100">
    <a class="absolute inset-0 z-[1]" href="#"></a>

    <!-- Icon -->
    <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
      <div class="relative z-10 size-7 flex justify-center items-center">
        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"></div>
      </div>
    </div>
    <!-- End Icon -->

    <!-- Right Content -->
    <div class="grow p-2 pb-8">
      <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
        Take a break ⛳️
      </h3>
      <p class="mt-1 text-sm text-gray-600">
        Just chill for now... 😉
      </p>
    </div>
    <!-- End Right Content -->
  </div>
  <!-- End Item -->
</div>
<!-- End Timeline -->
    </section>
    <section id="progress" class="border-2 border-solid border-red-500 mt-3 ">
      <!-- Step Progress -->
<div class="max-w-40 flex items-center gap-x-1">
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div>
    <div class="w-10 text-end">
      <span class="text-sm text-gray-800">50%</span>
    </div>
  </div>
</div>
<!-- End Step Progress -->

<!-- Step Progress -->
<div class="flex items-center gap-x-1">
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div>
    <div class="w-10 text-end">
      <span class="text-sm text-gray-800">50%</span>
    </div>
  </div>
</div>
<!-- End Step Progress -->

<!-- Step Progress -->
<div class="mt-5 max-w-40 flex items-center gap-x-1">
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-red-600 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-red-100 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-red-100 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-red-100 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div>
    <div class="w-10 text-end">
      <span class="text-sm text-red-500">25%</span>
    </div>
  </div>
</div>
<!-- End Step Progress -->

<!-- Step Progress -->
<div class="w-full flex items-center gap-x-1">
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-red-600 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-red-100 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-red-100 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-red-100 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div>
    <div class="w-10 text-end">
      <span class="text-sm text-red-500">25%</span>
    </div>
  </div>
</div>
<!-- End Step Progress -->

<!-- Step Progress -->
<div class="mt-5 max-w-40 flex items-center gap-x-1">
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div>
    <div class="w-10 text-end">
      <span class="text-sm text-gray-800">100%</span>
    </div>
  </div>
</div>
<!-- End Step Progress -->

<!-- Step Progress -->
<div class="flex items-center gap-x-1">
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  <div>
    <div class="w-10 text-end">
      <span class="text-sm text-gray-800">100%</span>
    </div>
  </div>
</div>
<!-- End Step Progress -->

<!-- Step Progress -->
<div class="mt-5 max-w-[8.5rem] flex items-center gap-x-1">
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="ms-1">
    <span class="flex-shrink-0 ms-auto size-4 flex justify-center items-center rounded-full bg-teal-500 text-white">
      <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </span>
  </div>
</div>
<!-- End Step Progress -->

<!-- Step Progress -->
<div class="mt-2 flex items-center gap-x-1">
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="ms-1">
    <span class="flex-shrink-0 ms-auto size-4 flex justify-center items-center rounded-full bg-teal-500 text-white">
      <svg class="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </span>
  </div>
</div>
<!-- End Step Progress -->
<!-- Circular Progress -->
<div class="relative size-40">
  <svg class="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <!-- Background Circle -->
    <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200" stroke-width="2"></circle>
    <!-- Progress Circle inside a group with rotation -->
    <g class="origin-center -rotate-90 transform">
      <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-600" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="75"></circle>
    </g>
  </svg>
</div>
<!-- End Circular Progress -->

<!-- Circular Progress -->
<div class="relative size-40">
  <svg class="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <!-- Background Circle -->
    <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200" stroke-width="2"></circle>
    <!-- Progress Circle inside a group with rotation -->
    <g class="origin-center -rotate-90 transform">
      <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-600" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="75"></circle>
    </g>
  </svg>
  <!-- Percentage Text -->
  <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <span class="text-center text-2xl font-bold text-gray-800">72%</span>
  </div>
</div>
<!-- End Circular Progress -->
      </section>


  
  </div>
</template>

<script>
import ClipboardJS from 'clipboard';

export default {
  mounted() {
    this.initializeClipboard();
  },
  methods: {
    initializeClipboard() {
      const clipboardButton = this.$refs.clipboardButton;

      if (!clipboardButton) {
        console.error('Clipboard button not found');
        return;
      }

      const clipboard = new ClipboardJS(clipboardButton, {
        text: () => {
          const clipboardText = clipboardButton.dataset.clipboardText;

          if (clipboardText) return clipboardText;

          const clipboardTarget = clipboardButton.getAttribute('data-clipboard-target');
          const element = document.querySelector(clipboardTarget);

          if (!element) return '';

          if (
            element.tagName === 'SELECT' ||
            element.tagName === 'INPUT' ||
            element.tagName === 'TEXTAREA'
          ) return element.value;
          else return element.textContent;
        }
      });

      clipboard.on('success', () => {
        const successText = clipboardButton.getAttribute('data-clipboard-success-text') || '';
        const defaultTextElement = clipboardButton.querySelector('.js-clipboard-success-text');
        const defaultIcon = clipboardButton.querySelector('.js-clipboard-default');
        const successIcon = clipboardButton.querySelector('.js-clipboard-success');

        if (defaultTextElement) defaultTextElement.textContent = successText;
        if (defaultIcon && successIcon) {
          defaultIcon.style.display = 'none';
          successIcon.style.display = 'block';
        }

        setTimeout(() => {
          if (defaultTextElement) defaultTextElement.textContent = 'Copy';
          if (defaultIcon && successIcon) {
            defaultIcon.style.display = '';
            successIcon.style.display = '';
          }
        }, 800);
      });
    }
  }
}
</script>

<style scoped>
/* Your scoped styles here */
</style>
