import { route } from "preact-router";
import { useState } from "preact/hooks";

interface AppProps {
  path: string;
}

export function App(_: AppProps) {
  const [email, setEmail] = useState("");
  return (
    <div class="px-5 flex flex-1 justify-center py-5">
      <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div class="@container">
          <div class="@[480px]:p-4">
            <div class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10" style="background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')">
              <div class="flex flex-col gap-2 text-left">
                <h1 class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Brazilian Developers for U.S. Companies</h1>
                <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">Build your product with our skilled, English-speaking developers. We are a Brazilian company that provides high-quality software solutions and developer outsourcing services to the US market. Our developers have experience with big tech companies like Meta and IBM, ensuring top-notch solutions. What's more, our services are more cost-effective due to the currency exchange benefits between the Brazilian Real and the US Dollar.</h2>
              </div>
              <label class="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    route("/contact?email=" + email);
                  }}
                  class="flex w-full flex-1 items-stretch rounded-xl h-full"
                >
                  <div class="text-[#617a89] flex border border-[#dbe2e6] bg-white items-center justify-center pl-[15px] rounded-l-xl border-r-0" data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input
                    onChange={(e: any) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Email Address"
                    required
                    type="email"
                    class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] h-full placeholder:text-[#617a89] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                  />
                  <div class="flex items-center justify-center rounded-r-xl border-l-0 border border-[#dbe2e6] bg-white pr-[7px]">
                    <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1f9fef] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                      <span class="truncate">Get Started</span>
                    </button>
                  </div>
                </form>
              </label>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-10 px-4 py-10 @container">
          <h1 class="text-[#111518] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">Why Choose BRZDevs?</h1>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
            <div class="flex flex-1 gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 flex-col">
              <div class="text-[#111518]" data-icon="Globe" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path>
                </svg>
              </div>
              <div class="flex flex-col gap-1">
                <h2 class="text-[#111518] text-base font-bold leading-tight">Global Talent Pool</h2>
                <p class="text-[#617a89] text-sm font-normal leading-normal">Access to top-tier talent from Brazil's renowned tech industry</p>
              </div>
            </div>
            <div class="flex flex-1 gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 flex-col">
              <div class="text-[#111518]" data-icon="Users" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                </svg>
              </div>
              <div class="flex flex-col gap-1">
                <h2 class="text-[#111518] text-base font-bold leading-tight">Scaling Made Simple</h2>
                <p class="text-[#617a89] text-sm font-normal leading-normal">Quickly scale your team up or down based on your needs</p>
              </div>
            </div>
            <div class="flex flex-1 gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 flex-col">
              <div class="text-[#111518]" data-icon="ChatCircleDots" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path>
                </svg>
              </div>
              <div class="flex flex-col gap-1">
                <h2 class="text-[#111518] text-base font-bold leading-tight">Fluent English</h2>
                <p class="text-[#617a89] text-sm font-normal leading-normal">Our developers are fluent in English and culturally aligned with the U.S.</p>
              </div>
            </div>
            <div class="flex flex-1 gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 flex-col">
              <div class="text-[#111518]" data-icon="Clock" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                </svg>
              </div>
              <div class="flex flex-col gap-1">
                <h2 class="text-[#111518] text-base font-bold leading-tight">Time Zone Alignment</h2>
                <p class="text-[#617a89] text-sm font-normal leading-normal">Our time zone is only 2 hours ahead of EST and 5 hours ahead of PST</p>
              </div>
            </div>
            <div class="flex flex-1 gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 flex-col">
              <div class="text-[#111518]" data-icon="Handshake" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-55.08,55.09a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48Zm-46.18,12.94L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Zm-187.54-18,17.69,8.85L61.27,75.58,43.58,66.73ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm49.24-36.24L212.42,66.73l-17.69,8.85,24.85,49.69Z"></path>
                </svg>
              </div>
              <div class="flex flex-col gap-1">
                <h2 class="text-[#111518] text-base font-bold leading-tight">Cultural Alignment</h2>
                <p class="text-[#617a89] text-sm font-normal leading-normal">Our developers are familiar with U.S. business culture</p>
              </div>
            </div>
            <div class="flex flex-1 gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 flex-col">
              <div class="text-[#111518]" data-icon="CurrencyDollar" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path>
                </svg>
              </div>
              <div class="flex flex-col gap-1">
                <h2 class="text-[#111518] text-base font-bold leading-tight">Cost-Effective</h2>
                <p class="text-[#617a89] text-sm font-normal leading-normal">Lower costs compared to U.S.-based developers without sacrificing quality</p>
              </div>
            </div>
            <div class="flex flex-1 gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 flex-col">
              <div class="text-[#111518]" data-icon="Wrench" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>
                </svg>
              </div>
              <div class="flex flex-col gap-1">
                <h2 class="text-[#111518] text-base font-bold leading-tight">Technology Agnostic</h2>
                <p class="text-[#617a89] text-sm font-normal leading-normal">We have expertise in a wide range of technologies and frameworks</p>
              </div>
            </div>
            <div class="flex flex-1 gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 flex-col">
              <div class="text-[#111518]" data-icon="Rocket" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"></path>
                </svg>
              </div>
              <div class="flex flex-col gap-1">
                <h2 class="text-[#111518] text-base font-bold leading-tight">Agile Development</h2>
                <p class="text-[#617a89] text-sm font-normal leading-normal">Our agile development process ensures flexibility and efficiency</p>
              </div>
            </div>
            <div class="flex flex-1 gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 flex-col">
              <div class="text-[#111518]" data-icon="ShieldCheck" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
                </svg>
              </div>
              <div class="flex flex-col gap-1">
                <h2 class="text-[#111518] text-base font-bold leading-tight">Quality Assurance</h2>
                <p class="text-[#617a89] text-sm font-normal leading-normal">We provide comprehensive QA services to ensure your product meets the highest standards</p>
              </div>
            </div>
            <div class="flex flex-1 gap-3 rounded-lg border border-[#dbe2e6] bg-white p-4 flex-col">
              <div class="text-[#111518]" data-icon="Lightbulb" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
                </svg>
              </div>
              <div class="flex flex-col gap-1">
                <h2 class="text-[#111518] text-base font-bold leading-tight">Innovation Driven</h2>
                <p class="text-[#617a89] text-sm font-normal leading-normal">We stay current with the latest technologies and best practices</p>
              </div>
            </div>
          </div>
        </div>
        <h2 class="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Services</h2>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div class="flex flex-col gap-3 pb-3">
            <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" style="background-image: url('https://cdn.usegalileo.ai/sdxl10/fb18633f-72a2-49f2-8fad-335114605991.png')"></div>
            <div>
              <p class="text-[#111518] text-base font-medium leading-normal">Developer Outsourcing</p>
              <p class="text-[#617a89] text-sm font-normal leading-normal">Expand your engineering team with skilled Brazilian developers</p>
            </div>
          </div>
          <div class="flex flex-col gap-3 pb-3">
            <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" style="background-image: url('https://cdn.usegalileo.ai/stability/5a9d92f2-e56a-4f6c-894f-d14323da8724.png')"></div>
            <div>
              <p class="text-[#111518] text-base font-medium leading-normal">Custom Software Development</p>
              <p class="text-[#617a89] text-sm font-normal leading-normal">Leverage our expertise to build custom software tailored to your business needs</p>
            </div>
          </div>
          <div class="flex flex-col gap-3 pb-3">
            <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" style="background-image: url('https://cdn.usegalileo.ai/stability/1cfbfe5e-fdd5-4200-9724-e383b1c6a7c2.png')"></div>
            <div>
              <p class="text-[#111518] text-base font-medium leading-normal">Product Design &amp; Strategy</p>
              <p class="text-[#617a89] text-sm font-normal leading-normal">Get guidance and support from our experienced product designers and strategists</p>
            </div>
          </div>
          <div class="flex flex-col gap-3 pb-3">
            <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" style="background-image: url('https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"></div>
            <div>
              <p class="text-[#111518] text-base font-medium leading-normal">UI/UX Design</p>
              <p class="text-[#617a89] text-sm font-normal leading-normal">Get high-quality UI/UX design for your software with our team of Brazilian designers.</p>
            </div>
          </div>
        </div>
        <div class="@container">
          <div class="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
            <div class="flex flex-col gap-2 text-center">
              <h1 class="text-[#111518] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">Ready to elevate your product?</h1>
              <p class="text-[#111518] text-base font-normal leading-normal max-w-[720px">Let's talk about how BRZDevs can help you achieve your goals.</p>
            </div>
            <div class="flex flex-1 justify-center">
              <div class="flex justify-center">
                <button
                  onClick={() => {
                    route("/contact");
                  }}
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1f9fef] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                >
                  <span class="truncate">Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
