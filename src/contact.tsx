import { useMemo, useState } from "preact/hooks";

interface ContactProps {
  path: string;
}

const Contact = (_: ContactProps) => {
  const [finished, setFinished] = useState(false);
  const emailQuery = useMemo(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("email");
  }, []);
  return (
    <div class="w-full flex">
      <form
        action="https://formspree.io/f/mpwzbrwl"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const data = new FormData(form);
          const xhr = new XMLHttpRequest();
          xhr.open(form.method, form.action, true);
          xhr.setRequestHeader("Accept", "application/json");
          xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
              form.reset();
              setFinished(true);
              window.gtag("event", "conversion", { send_to: "AW-16805749542/uJ6mCJW2w_IZEKbGzc0-" });
            } else {
              alert("Sorry, there was a problem sending your message. Please try again later.");
            }
          };
          xhr.send(data);
        }}
        class="px-30 flex flex-1 justify-center py-5"
      >
        {finished ? (
          <div class="flex flex-col items-center gap-3 p-4 bg-[#F0F3F4] w-[90%] max-w-[750px] rounded-xl">
            <p class="text-[#1C160C] text-4xl font-black leading-tight tracking-[-0.033em]">Thank you!</p>
            <p class="text-[#3f3f3f] text-base font-normal leading-normal">Your message has been sent successfully.</p>
            <p class="text-[#3f3f3f] text-base font-normal leading-normal">We will get back to you as soon as possible.</p>
          </div>
        ) : (
          <div class="layout-content-container justify-center items-center flex flex-col max-w-[1300px] w-[90%]">
            <div class="flex flex-wrap justify-between gap-3 p-4  w-[90%] max-w-[750px]">
              <div class="flex min-w-72 flex-col gap-3">
                <p class="text-[#1C160C] text-4xl font-black leading-tight tracking-[-0.033em]">Contact Us</p>
                <p class="text-[#A18249] text-base font-normal leading-normal">Get in touch with our team, let's discuss your project.</p>
              </div>
            </div>
            <div class="flex max-w-[750px] w-[90%] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#1C160C] text-base font-medium leading-normal pb-2">Full Name</p>
                <input type="text" required name="fullname" placeholder="Enter your full name" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal" value="" />
              </label>
            </div>
            <div class="flex max-w-[750px] w-[90%] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#1C160C] text-base font-medium leading-normal pb-2">Email Address</p>
                <input type="email" required defaultValue={emailQuery || ""} name="email" placeholder="Enter your email address" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal" />
              </label>
            </div>
            <div class="flex max-w-[750px] w-[90%] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#1C160C] text-base font-medium leading-normal pb-2">Message</p>
                <select required name="service" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal">
                  <option value="" selected disabled>
                    Select a service
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="UI/UX Design">Entire service development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="outsourcing">Outsourcing Developers</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>
            <div class="flex max-w-[750px] w-[90%] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#1C160C] text-base font-medium leading-normal pb-2">Message</p>
                <textarea name="message" placeholder="Describe what you need here" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#FFFFFF] focus:border-[#E9DFCE] min-h-36 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"></textarea>
              </label>
            </div>
            <div class="flex max-w-[750px] w-[80%]">
              <button class="flex min-w-[84px] max-w-[750px] w-[90%] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#1f9fef] text-[#FFFFFF] text-base font-bold leading-normal tracking-[0.015em]">
                <span class="truncate">Send Message</span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
export default Contact;
