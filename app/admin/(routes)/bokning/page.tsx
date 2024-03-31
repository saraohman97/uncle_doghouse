"use client";

import Image from "next/image";
import { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

const AdminPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-30 flex items-center justify-center"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`fixed z-40 bg-white rounded-xl p-10 sm:min-w-[400px] space-y-6 ${
                open
                  ? "opacity-100 transition-opacity duration-300 ease-in-out"
                  : "opacity-0"
              }`}
            >
              {/* MODAL CONTENT */}
              <div className="flex justify-between">
                <div className="text-xl font-semibold">Uppdatera bokning</div>
                <div onClick={() => setOpen(false)}>X</div>
              </div>
              <div className="flex">
                <div className="bg-white px-2 min-w-10 flex items-center justify-center rounded-s font-semibold hover:bg-slate-50 cursor-pointer border text-sm">
                  2024
                </div>
                <div className="border h-10 w-96 rounded-l text-neutral-500 flex items-center justify-start px-4 py-2 text-sm">Lördag 16 mars: Release Party, Global Living</div>
                <div className="bg-black py-2 px-4 rounded-e font-semibold hover:bg-neutral-800 text-white cursor-pointer w-fit">
                  Uppdatera
                </div>
              </div>
              {/* <div className="cursor-pointer hover:bg-black/90 py-2 px-3 bg-black rounded text-white font-semibold w-fit">
                Spara
              </div> */}
            </div>
          </div>
        </>
      )}

      <div className="flex flex-col items-center">
        <div className="my-20 w-full">
          <div className="text-2xl font-extralight uppercase text-neutral-400 text-center mb-10">
            Bokningar
          </div>

          <div className="w-full flex-1 columns-2">
            {/* CREATE-BOOKING FORM */}
            <div className="flex w-full">
              <div className="bg-white px-2 min-w-10 flex items-center justify-center rounded-s font-semibold hover:bg-slate-50 cursor-pointer border text-sm">
                2024
              </div>

              <div className="border h-10 w-96 rounded-l" />

              <div className="bg-black py-2 px-4 rounded-e font-semibold hover:bg-neutral-800 text-white cursor-pointer w-fit">
                Boka
              </div>
            </div>
            {/* LIST OF BOOKINGS */}
            <div className="text-2xl font-semibold mt-8">2024</div>
            <div className="flex items-center justify-between gap-4 hover:bg-slate-50 rounded group">
              <div>Lördag 16 mars: Release Party, Global Living Västerås.</div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 cursor-pointer">
                <BiEdit
                  className="text-teal-700"
                  onClick={() => setOpen(true)}
                />
                <BiTrash className="text-red-500" />
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 hover:bg-slate-50 rounded group">
              <div>Lördag 8 april: Bierkeller Västerås 20:45</div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100">
                <BiEdit className="text-teal-700" />
                <BiTrash className="text-red-500" />
              </div>
            </div>
            <div className="text-2xl font-semibold mt-8">2023</div>
            Lördag 1 april, Private Party <br />
            Lördag 13 maj, Bierkeller Västerås (Bordsbokning: 021 80 02 00){" "}
            <br />
            Lördag 10 juni, Moonshine X-plosion, Dörhult. <br />
            Lördag 17 juni, Tramps MC Västerås. <br />
            Lördag 1 juli, Fagersta Bluesförening, Bluesfesten 2023, Fagersta
            Brukshotell. (Inställt) <br />
            Fredag 30 juni kl. 21:00: Västerås City Festival. <br />
            Fredag 18 augusti: Strul MC, Enköping (Mälaren runt) <br />
            Lördag 26 augusti kl. 20:45: Bierkeller Västerås (Bordsbokning: 021
            80 02 00) <br />
            Fredag 22 september o Lördag 23 september: Horten (Blues&apos;n),
            Norge. <br />
            Lördag 21 oktober: Tramps Vets, Pilgatan 8, Västerås <br />
            <div className="text-2xl font-semibold mt-8">2022</div>
            Lördag 26 februari, Bierkeller, Västerås.Fredag 19 augusti, Hemlig
            spelning! <br />
            Lördag 29 oktober kl. 20:45, Bierkeller Västerås (Bordsbokning: 021
            80 02 00) <br />
            Fredag 14/10 och Lördag 15/10, Bluesn Horten Norge. <br />
            Lördag 29/10 kl. 20:45, Bierkeller Västerås (Bordsbokning: 021 80 02
            00) <br />
            <div className="text-2xl font-semibold mt-8">2021</div>
            Lördag 7 augusti, Privat Party Rockland, Sala. <br />
            Fredag 20 augusti, Mälaren Runt. <br />
            Lördag 9 oktober, Bierkeller, Västerås. <br />
            Söndag 10 oktober, Konstföreningen, Västerås.Lördag 16 oktober:
            Blues At Eskilstuna - http://www.julymorning.nu <br />
            Lördag 6 november, Global Living, Västerås. <br />
            Lördag 13 november, Dirty Dicks, Jönköping. (Inställd) <br />
            <div className="text-2xl font-semibold mt-8">2020</div>
            Lördag 28 mars, BANKIREN Västerås (INSTÄLLD PGA CORONA) <br />
            Lördag 4 april, Dirty Dick&apos;s Saloon, Jönköping:
            www.dirtydickssaloon.com(INSTÄLLD PGA CORONA) <br />
            Söndag 17 maj kl. 17:00, Västerås Konsthall:
            www.konstnarsforeningen.com (INSTÄLLD PGA CORONA) <br />
            <div className="text-2xl font-semibold mt-8">2019</div>
            Vi har fullt upp med inspelning av nytt material till vår 3:e CD{" "}
            <br />
            Fredag 29 mars, Stallet Ramnäs Bluesafton:
            https://www.facebook.com/search/top/?q=smedens%20bbq&epa=SEARCH_BOX{" "}
            <br />
            Lördag 8 juni, Mashed Kidneys 40 years jubilee:
            http://www.mashedkidneys.se/ <br />
            Fredag 14 juni, Officersmässen Västerås <br />
            Onsdag 31 juli, Sätra Brunn: https://satrabrunn.se/evenemang/ <br />
            Fredag 23 aug, Bankiren Västerås <br />
            (Lördag 14 sept, Västerås Kultutnatt, Bankiren - INSTÄLLT) <br />
            (Fredag - lördag 1 - 2 nov, Blues&apos;n, Horten, Norge - INSTÄLLT){" "}
            <br />
            <div className="text-2xl font-semibold mt-8">2018</div>
            10 mars, Borlänge House of Blues
            http:/http://www.dalablueskollektiv.se/ <br />
            29 mars (Skärtorsdag), Bankiren Västerås <br />
            9 maj, Private Party <br />
            11 maj, STAMPEN Stockholm http://www.stockholmblues.se <br />
            16 juni, TRAMPS MC, Västerås30 juni, Fagersta Bluesfestival
            http://fagerstablues.se <br />
            11 juli, Sätra Brunn https://satrabrunn.se10 augusti, Smedens BBQ
            Ramnäs https://www.smedensbbq.se/ <br />
            25 augusti, TFG FESTIVAL, Skinnskatteberg <br />
            31 augusti, Västerås Officersmäss :
            http://www.vasterasofficersmass.se <br />
            26 oktober, Blues&apos;n Horten Norge <br />
            27 oktober, Blues&apos;n Horten Norge <br />
            2 november, Bankiren Västerås <br />
            3 november, TRAMPS Västerås <br />
            (1 december, Blue Chain, Vänersborg, Folkets Hus, Blå salen:
            http://www.bluechain.se) OBS! SPELNINGEN TYVÄRR INSTÄLLD P.G.A.
            SJUKDOM! <br />
            <div className="text-2xl font-semibold mt-8">2017</div>
            24 och 25 februari, Blues&apos;n Horten, Norge17 mars, STAMPEN,
            Stockholms Bluesförening <br />
            31 mars, Bankiren Västerås <br />
            22 april, Global Living Västerås, Record Store Day <br />
            6 maj, Private Party Västerås <br />8 juli kl. 12:00, Summer Meet
            Västerås http://vasterassummermeet.se/ <br />
            26 juli, Sätra Brunn http://satrabrunn.se <br />
            5 aug, SM Mälarbåtar M22 - M30, Rågsäcken Västerås <br />
            21/10 - 22/10 Blues At Sea (M/S Viking Cinderella) Vi lirar 23:30 -
            00:30 July Morning Records AB <br />
            2 november, INTIMAN Västerås - Vi värmer upp gästerna innan
            http://www.lisalystam.se <br />
            <div className="text-2xl font-semibold mt-8">2016</div>
            23 april, Fredrikstad, Norge <br />
            1 juli, Josefs House of Blues, Eskilstuna <br />
            2 juli, Privat Party, Västerås <br />
            27 aug, Bankiren, Västerås <br />
            3 sept, Josefs House of Blues, Eskilstuna <br />
            24 sept, St:a Clara Bierhaus, Stockholm <br />
            30 sept, Sarpsborg Bluesklubb, Norge <br />
            1 okt, Fjeldberg Marina, Fredrikstad, Norge <br />
            28 okt, Blues&apos;n Horten Norge <br />
            29 okt, Blues&apos;n afternoon Blues, Horten Norge <br />
            29 okt, Blues&apos;n Horten Norge <br />
            25 nov, Hörnkrogen, Kopparberg (Inställd) <br />
            2 dec, P4 Västmanland (Live kl.15:30) <br />
            3 dec, Josefs House of Blues, Eskilstuna(Inställd!) <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
