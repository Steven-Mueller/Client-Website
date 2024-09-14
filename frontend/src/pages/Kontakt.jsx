import React from "react";

function Kontakt() {
  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="name">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            className="text-black"
            type="text"
            id="name"
            placeholder="Bitte Namen angeben..."
          />
        </div>
        <br />
        <div className="email">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            className="text-black"
            type="email"
            id="email"
            placeholder="Bitte Email angeben..."
          />
        </div>
        <br />
        <div className="message">
          <label htmlFor="message">Nachricht:</label>
          <br />
          <textarea
            className="text-black"
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Ihre Nachricht an mich..."
          ></textarea>
        </div>
        <br />
        <button className="border-2 border-slate-400 p-2 rounded-xl bg-slate-600 active:scale-90 active:border-white active:bg-slate-400">
          Nachricht versenden
        </button>
      </form>
    </>
  );
}

export default Kontakt;
