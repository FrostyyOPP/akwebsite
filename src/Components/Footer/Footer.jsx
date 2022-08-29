import React from "react";
import { BsTelegram, BsInstagram, BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';

export const Footer = () => {
  return (
    <div>
        <div class="bg-primary text-center text-white">
          <div class="container p-4 pb-0">
            <section class="mb-4">
              <a
                class="btn btn-outline-secondary btn-floating m-1"
                href="#!"
                role="button"
              >
                <BsFacebook/>
              </a>

              <a
                class="btn btn-outline-secondary btn-floating m-1"
                href="#!"
                role="button"
              >
                <BsTwitter/>
              </a>

              <a
                class="btn btn-outline-secondary btn-floating m-1"
                href="#!"
                role="button"
              >
               <BsTelegram/>
              </a>

              <a
                class="btn btn-outline-secondary btn-floating m-1"
                href="#!"
                role="button"
              >
                <BsInstagram className="bg-primary"/>
              </a>

              <a
                class="btn btn-outline-secondary btn-floating m-1"
                href="#!"
                role="button"
              >
                <BsYoutube/>
              </a>

            </section>
          </div>

          <div
            class="text-center p-3"
          >
            © 2022 Copyright:
            <a class="text-white" href="/">
              BackgrounPNG.com
            </a>
          </div>
        </div>
      </div>
  );
};
