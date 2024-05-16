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
            onClick={() => document.getElementById('my_modal_1').showModal()}
          >
            <img src={img} className="h-10 w-auto" alt="Logo" />
          </button>
        </div>
        <div>
          <ThemeChanger />
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <img src={img} />
        </div>
      </dialog>
    </>
  );
};
