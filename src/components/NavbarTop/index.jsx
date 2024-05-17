import React from 'react';
import { ThemeChanger } from '../ThemeChanger';
import img from '../../assets/wolfs-img.png';

export const NavbarTop = () => {
  return (
    <>
      <div className="navbar bg-base-200">
        <div className="flex flex-1 items-center">
          <button
            className="px-1 btn btn-ghost"
            onClick={() => document.getElementById('my_modal_3').showModal()}
          >
            <img src={img} className="h-10 w-auto" alt="Logo" />
          </button>
        </div>
        <div>
          <ThemeChanger />
        </div>
      </div>

      {/* <dialog id="my_modal_3" className="modal  bg-black bg-opacity-50">
        <div className="modal-box max-w-full bg-transparent p-4">
          <form method="dialog">
            <button className="btn btn-md text-3xl btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <img src={img} className="border border-primary rounded-lg mt-4" />
        </div>
      </dialog> */}
      <dialog id="my_modal_3" className="modal bg-black bg-opacity-90">
        <div className="modal-box max-w-full bg-transparent p-4 relative">
          <form method="dialog">
            <button className="btn btn-md text-2xl btn-circle btn-ghost bg-white absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col md:flex-row items-start">
            <img
              src={img}
              className="border border-primary rounded-lg mt-4 md:mt-0 md:mr-4"
              alt="Dark Wolf Image"
            />
            <div className="mt-4 md:mt-0 max-w-lg">
              <h2 className="text-3xl font-extrabold text-white">
                Dark Wolf (D.W)
              </h2>
              <p className="text-lg text-gray-300 mt-12">
                Dark Wolf, also known as D.W, is a legendary figure known for
                its mysterious and powerful presence. With a commanding aura and
                unparalleled strength, D.W stands as a symbol of resilience and
                tenacity. Embrace the spirit of the Dark Wolf and channel its
                energy to overcome any obstacle in your path.
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
