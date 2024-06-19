import React from 'react';
import { ThemeChanger } from '../ThemeChanger';
import img from '../../assets/wolfs-img.png';

export const NavbarTop = () => {
  return (
    <>
      <div className="navbar bg-base-300">
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
                Dark Wolf, também conhecido como D.W, é uma figura lendária conhecida por
                sua presença misteriosa e poderosa. Com uma aura de comando e
                força incomparável, D.W permanece como um símbolo de resiliência e
                tenacidade. Abrace o espírito do Lobo Negro e canalize seu
                energia para superar qualquer obstáculo em seu caminho.
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
