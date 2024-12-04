import { route } from "preact-router";

const Header = () => {
  return (
    <header class="cursor-pointer flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f3f4] px-10 py-3">
      <div
        onClick={() => {
          route("/");
        }}
        class="flex items-center gap-4 text-[#111518]"
      >
        <div class="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 class="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em]">BRZDevs</h2>
      </div>
      <div class="flex flex-1 justify-end gap-8">
        <button
          onClick={() => {
            route("/contact");
          }}
          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1f9fef] text-white text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span class="truncate">Contact</span>
        </button>
      </div>
    </header>
  );
};
export default Header;