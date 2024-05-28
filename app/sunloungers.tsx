import NextJsImage from "@/components/album-image";
import React from "react";
import PhotoAlbum from "react-photo-album";
import Title from "./title";

const photos = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664110426556-DM7G72JYVKAD6WEGRZBL/UIC+surf+lounger+.jpg",
    width: 1184,
    height: 789,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1716090272250-1DVML5U8CZGES29DQ61O/IMG_1652+copy.jpg",
    width: 1152,
    height: 648,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664110453740-HEVHWBUM4DA9A17O22TF/THE+PALETTE+.jpg",
    width: 1280,
    height: 720,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664112854897-B7COAQ7RMEYV17BOX9PI/the+tembusu+-+eco+lounger+.jpg",
    width: 1208,
    height: 679,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664110453741-SL6PPFUGBM47U4SW9AU4/Eco+sun+lounger+.jpeg",
    width: 1168,
    height: 657,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1716090120922-KHXTJ2MSBVLDKIZ6JLXI/IMG_0800+copy.jpg",
    width: 1216,
    height: 684,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664112892184-NMFL6X4LUC3CGT7HTRYW/Pines+Kettal+lounger+low.jpg",
    width: 1240,
    height: 697,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664112893425-K9LBZI7VIWS6JLKPDYFZ/DSC03496.JPG",
    width: 1192,
    height: 670,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1716090914162-ND5RHO0M4PH9GBMK4BR5/IMG_7570+copy.jpg",
    width: 1264,
    height: 711,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664117733655-BHX54T4WINJ9N544FS94/Double+sun+lounger+in+satin+finished+stainless+steel+%26+Batyline.jpg",
    width: 1176,
    height: 661,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664118296020-GDTOAOND6FL4X0OCZ1GJ/IMG_8763.jpeg",
    width: 1248,
    height: 702,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1716090831496-FPBNNL8O73JEN5LRLH48/IMG_0022.JPG",
    width: 1232,
    height: 693,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664112886250-UFD7010O3TA0C4ZIMTJJ/DSCF1242.jpg",
    width: 1200,
    height: 675,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664112854038-XOKZA76ZBB9TC4UT2P8M/IMG_9301.jpeg",
    width: 1272,
    height: 715,
  },
];

const SunLoungers = () => {
  return (
    <>
      <Title href="/interiors-mill-works">Sun Loungers</Title>
      <section className="w-full py-10 px-2 md:px-20 text-black">
        <PhotoAlbum
          layout="rows"
          photos={photos}
          renderPhoto={NextJsImage}
          defaultContainerWidth={1200}
          sizes={{ size: "calc(100vw - 240px)" }}
        />
      </section>
    </>
  );
};

export default SunLoungers;
