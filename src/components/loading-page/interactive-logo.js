import React, { useState } from "react";
import "./loading-page.css";

function InteractiveLogo() {
  const colors = ["black", "cielitoLindo", "naranjaAgria", "selva", "desierto"];
//this code creates a state for each letter and changes it's colors when user hovers over
  //^CHANCE COLOR OF LETTER A
  const [a_color, setColorA] = useState("black");
  const [a_color_counter, SetCounterA] = useState(1);
  const changeColorA = () => {
    if (a_color_counter <= 4) {
      SetCounterA(a_color_counter + 1);
      return setColorA(colors[a_color_counter]);
    } else {
      SetCounterA(0);
    }
  };
  //^CHANCE COLOR OF LETTER K
  const [k_color, setColorK] = useState("black");
  const [k_color_counter, SetCounterK] = useState(1);
  const changeColorK = () => {
    if (k_color_counter <= 4) {
      SetCounterK(k_color_counter + 1);
      return setColorK(colors[k_color_counter]);
    } else {
      SetCounterK(0);
    }
  };
  //^CHANCE COLOR OF LETTER O
  const [o_1_color, setColorO1] = useState("black");
  const [o_1_color_counter, SetCounterO1] = useState(1);
  const changeColorO1 = () => {
    if (o_1_color_counter <= 4) {
      SetCounterO1(o_1_color_counter + 1);
      return setColorO1(colors[o_1_color_counter]);
    } else {
      SetCounterO1(0);
    }
  };
  //^CHANCE COLOR OF LETTER R
  const [r_color, setColorR] = useState("black");
  const [r_color_counter, SetCounterR] = useState(1);
  const changeColorR = () => {
    if (r_color_counter <= 4) {
      SetCounterR(r_color_counter + 1);
      return setColorR(colors[r_color_counter]);
    } else {
      SetCounterR(0);
    }
  };
  //^CHANCE COLOR OF LETTER O
  const [o_2_color, setColorO2] = useState("black");
  const [o_2_color_counter, SetCounterO2] = useState(1);
  const changeColorO2 = () => {
    if (o_2_color_counter <= 4) {
      SetCounterO2(o_2_color_counter + 1);
      return setColorO2(colors[o_2_color_counter]);
    } else {
      SetCounterO2(0);
    }
  };

  //this state keeps track of all the colors
  //   const [color, setColor] = useState("black");
  //this keeps track of the array index
  //   const [color_counter, setCounter] = useState(1);

  //this is an array with the classes

  //   const changeColor = () => {
  //     if (color_counter <= 4) {
  //       setCounter(color_counter + 1);
  //       return setColor(colors[color_counter]);
  //     } else {
  //       setCounter(0);
  //     }
  //   };
  return (
    <div className="logo">
      <svg
        width="532"
        height="204"
        viewBox="0 0 532 204"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Logomark_Logotype" clip-path="url(#clip0_7_174)">
          <g id="Logotype">
            <g id="Akoro">
              <path
                key="Letter_A"
                d="M133.89 150.31C128.98 145.85 126.53 139.49 126.53 131.22C126.53 125.28 128.53 120.2 132.54 116C136.54 111.8 140.94 108.93 145.72 107.37C148.17 106.59 151.05 105.85 154.34 105.14C157.63 104.43 159.86 103.95 161.03 103.69C167.49 102.4 172.34 101.2 175.57 100.1C178.8 99.01 180.74 97.49 181.38 95.55C181.38 86.25 179.6 78.49 176.05 72.29C172.5 66.09 166.58 62.99 158.32 62.99C153.15 62.99 149.31 64.83 146.79 68.51C144.27 72.19 143.01 77.14 143.01 83.34C143.01 85.02 143.33 86.22 143.98 86.92C144.63 87.63 146.11 87.99 148.44 87.99C149.86 87.99 151.09 87.67 152.12 87.02C153.15 86.38 153.67 85.6 153.67 84.7H155.42V89.93H130.03C130.03 85.28 131.39 80.66 134.1 76.07C136.81 71.48 140.56 67.73 145.34 64.83C150.12 61.92 155.42 60.47 161.23 60.47C168.98 60.47 175.22 62.25 179.93 65.8C184.65 69.35 188 73.62 190.01 78.59C192.01 83.57 193.01 88.51 193.01 93.42V135.48C193.01 145.17 195.08 150.02 199.21 150.02C200.5 150.02 201.7 149.15 202.8 147.4C203.9 145.65 204.45 143.88 204.45 142.07H206.39C206.39 146.85 204.94 150.53 202.03 153.12C199.12 155.7 195.79 157 192.05 157C187.66 157 184.78 155.06 183.42 151.19C182.06 147.31 181.39 141.89 181.39 134.91V125.99C181.39 127.8 180.52 131.23 178.77 136.26C177.02 141.3 173.95 146.02 169.56 150.41C165.17 154.8 159.35 157 152.12 157C144.89 157 138.81 154.77 133.9 150.31H133.89ZM168.78 146.33C172.53 142.84 175.5 138.71 177.7 133.93C179.9 129.15 181 125.14 181 121.91V99.81C181 100.2 180.35 100.59 179.06 100.97C177.77 101.36 176.15 101.75 174.21 102.13C165.81 104.33 159.67 106.14 155.8 107.56C149.72 109.76 145.27 112.83 142.43 116.77C139.59 120.71 138.17 125.14 138.17 130.05C138.17 135.74 139.75 140.74 142.92 145.07C146.08 149.4 150.64 151.56 156.58 151.56C160.97 151.56 165.04 149.81 168.79 146.32L168.78 146.33Z"
                fill="#302C2D"
                className={a_color}
                onMouseOver={changeColorA}
                onClick={changeColorA}
              />
              <path
                id="Letter_K"
                d="M292.34 148.37C294.99 151.28 297.86 152.73 300.96 152.73C302.12 152.73 303.35 152.54 304.64 152.15V155.06H266.07V152.15C267.88 152.54 269.37 152.73 270.53 152.73C272.47 152.73 273.92 152.34 274.89 151.57C275.86 150.79 276.34 149.89 276.34 148.86C276.34 147.7 276.08 146.8 275.56 146.15L255.4 116.69L243 98.47L235.44 105.64V143.44C235.44 146.8 235.73 149.25 236.31 150.81C236.89 152.36 238.21 153.13 240.28 153.13C241.31 153.13 242.93 152.81 245.12 152.16V155.07H214.11V152.16C216.31 152.81 217.92 153.13 218.95 153.13C221.28 153.13 222.76 152.33 223.41 150.71C224.05 149.1 224.38 146.67 224.38 143.44V10.66C223.09 11.05 221.6 11.24 219.92 11.24C218.11 11.24 216.17 11.05 214.11 10.66V5.43H215.85C215.85 6.21 216.53 6.95 217.89 7.66C219.25 8.37 220.57 8.72 221.86 8.72C224.83 8.72 227.35 7.92 229.42 6.3C231.49 4.69 232.52 2.59 232.52 0H235.62L235.43 102.15L248.22 90.33C255.2 84.13 260.56 79.15 264.31 75.4C266.25 73.46 267.22 71.72 267.22 70.17C267.22 69.01 266.74 68.11 265.77 67.46C264.8 66.82 263.47 66.49 261.8 66.49C260.38 66.49 258.5 66.81 256.18 67.46V64.55H289.13V67.46C286.93 66.82 285.12 66.49 283.7 66.49C280.73 66.49 278.01 67.3 275.56 68.91C273.1 70.53 270.33 72.89 267.23 75.98C263.61 79.6 258.7 84.25 252.5 89.94L280.02 131.61C285.57 139.88 289.68 145.47 292.33 148.37H292.34Z"
                fill="#302C2D"
                className={k_color}
                onMouseOver={changeColorK}
                onClick={changeColorK}
              />
              <path
                id="Letter_O_1"
                d="M309.78 143.92C303.77 135.2 300.77 123.47 300.77 108.74C300.77 95.17 303.8 83.77 309.88 74.53C315.95 65.29 325.77 60.67 339.34 60.67C352.91 60.67 362.76 65.29 368.9 74.53C375.04 83.77 378.11 95.17 378.11 108.74C378.11 123.47 375.07 135.2 369 143.92C362.92 152.64 353.04 157 339.34 157C325.64 157 315.79 152.64 309.78 143.92ZM358.53 141.98C362.53 133.52 364.54 122.44 364.54 108.74C364.54 95.95 362.47 85.13 358.34 76.27C354.2 67.42 347.87 62.99 339.35 62.99C330.83 62.99 324.52 67.42 320.45 76.27C316.38 85.12 314.34 95.94 314.34 108.74C314.34 122.44 316.34 133.52 320.35 141.98C324.35 150.44 330.69 154.68 339.34 154.68C347.99 154.68 354.52 150.45 358.53 141.98Z"
                fill="#302C2D"
                className={o_1_color}
                onMouseOver={changeColorO1}
                onClick={changeColorO1}
              />
              <path
                id="Letter_R"
                d="M440.91 82.18C440.39 84.12 440.07 85.28 439.94 85.67C438.9 89.03 438.39 91.29 438.39 92.45C438.39 95.03 440.26 96.33 444.01 96.33V98.27C438.71 98.27 434.93 96.91 432.67 94.2C430.41 91.49 429.28 88 429.28 83.73C429.28 81.67 429.47 79.66 429.86 77.72C430.63 73.97 431.02 71.07 431.02 69C431.02 66.8 430.6 65.29 429.76 64.45C428.92 63.61 427.59 63.19 425.79 63.19C422.04 63.19 419.13 67.16 417.07 75.11C415 83.06 413.97 92.33 413.97 102.92V143.43C413.97 146.79 414.26 149.24 414.84 150.8C415.42 152.35 416.74 153.12 418.81 153.12C419.84 153.12 421.46 152.8 423.65 152.15V155.06H391.67V152.15C393.87 152.8 395.48 153.12 396.52 153.12C398.85 153.12 400.33 152.32 400.98 150.7C401.63 149.09 401.95 146.66 401.95 143.43V74.43C400.01 75.08 397.94 75.4 395.75 75.4C394.84 75.4 393.49 75.27 391.68 75.01V69.78H393.43C393.43 70.69 393.91 71.46 394.88 72.11C395.85 72.76 396.98 73.08 398.27 73.08C400.21 73.08 401.89 72.37 403.31 70.95C404.73 69.53 406.41 67.4 408.35 64.55H410.29L410.48 80.25H412.42C413.97 73.53 416.13 68.59 418.91 65.42C421.69 62.25 424.63 60.67 427.73 60.67C432.25 60.67 435.71 62.35 438.1 65.71C440.49 69.07 441.69 72.82 441.69 76.95C441.69 78.5 441.43 80.24 440.91 82.18Z"
                fill="#302C2D"
                className={r_color}
                onMouseOver={changeColorR}
                onClick={changeColorR}
              />
              <path
                id="Letter_O_2"
                d="M462.71 143.92C456.7 135.2 453.7 123.47 453.7 108.74C453.7 95.17 456.73 83.77 462.81 74.53C468.88 65.29 478.7 60.67 492.27 60.67C505.84 60.67 515.69 65.29 521.83 74.53C527.97 83.77 531.04 95.17 531.04 108.74C531.04 123.47 528 135.2 521.93 143.92C515.85 152.64 505.97 157 492.27 157C478.57 157 468.72 152.64 462.71 143.92ZM511.46 141.98C515.46 133.52 517.47 122.44 517.47 108.74C517.47 95.95 515.4 85.13 511.27 76.27C507.13 67.42 500.8 62.99 492.28 62.99C483.76 62.99 477.45 67.42 473.38 76.27C469.31 85.12 467.27 95.94 467.27 108.74C467.27 122.44 469.27 133.52 473.28 141.98C477.28 150.44 483.62 154.68 492.27 154.68C500.92 154.68 507.45 150.45 511.46 141.98Z"
                fill="#302C2D"
                className={o_2_color}
                onMouseOver={changeColorO2}
                onClick={changeColorO2}
              />
              <g id="Dots">
                <path
                  id="Dot_1"
                  d="M339.44 169.81C341.207 169.81 342.64 168.377 342.64 166.61C342.64 164.843 341.207 163.41 339.44 163.41C337.673 163.41 336.24 164.843 336.24 166.61C336.24 168.377 337.673 169.81 339.44 169.81Z"
                  fill="#302C2D"
                />
                <path
                  id="Dot_2"
                  d="M492.37 169.81C494.137 169.81 495.57 168.377 495.57 166.61C495.57 164.843 494.137 163.41 492.37 163.41C490.603 163.41 489.17 164.843 489.17 166.61C489.17 168.377 490.603 169.81 492.37 169.81Z"
                  fill="#302C2D"
                />
              </g>
            </g>
            <g id="Digital Media">
              <path
                id="Vector"
                d="M340.83 197.83V194.32H343.62V180.15H340.83V176.64H349.55C352.39 176.64 354.56 177.36 356.04 178.8C357.52 180.24 358.26 182.38 358.26 185.23V189.22C358.26 192.07 357.52 194.21 356.04 195.65C354.56 197.09 352.39 197.81 349.55 197.81H340.83V197.83ZM347.61 194.2H349.61C351.22 194.2 352.4 193.77 353.15 192.93C353.9 192.09 354.27 190.89 354.27 189.36V185.12C354.27 183.57 353.9 182.37 353.15 181.54C352.4 180.7 351.22 180.28 349.61 180.28H347.61V194.2Z"
                fill="#302C2D"
              />
              <path
                id="Vector_2"
                d="M363.62 181.06C362.93 181.06 362.35 180.84 361.88 180.39C361.41 179.94 361.17 179.36 361.17 178.63C361.17 177.9 361.41 177.32 361.88 176.88C362.35 176.44 362.93 176.21 363.62 176.21C364.31 176.21 364.91 176.43 365.37 176.88C365.83 177.33 366.07 177.91 366.07 178.63C366.07 179.35 365.84 179.94 365.37 180.39C364.9 180.84 364.32 181.06 363.62 181.06ZM361.71 197.82V182.81H365.52V197.82H361.71Z"
                fill="#302C2D"
              />
              <path
                id="Vector_3"
                d="M369.04 190.38V189.9C369.04 188.33 369.35 186.98 369.98 185.86C370.61 184.74 371.44 183.88 372.48 183.29C373.52 182.7 374.65 182.4 375.88 182.4C377.25 182.4 378.29 182.64 379 183.13C379.71 183.61 380.22 184.12 380.54 184.64H381.08V182.83H384.83V200.5C384.83 201.53 384.53 202.35 383.92 202.97C383.31 203.59 382.51 203.89 381.5 203.89H371.45V200.56H380.17C380.73 200.56 381.02 200.26 381.02 199.65V195.74H380.47C380.27 196.07 379.99 196.39 379.62 196.73C379.26 197.06 378.77 197.34 378.17 197.56C377.57 197.78 376.8 197.89 375.87 197.89C374.64 197.89 373.5 197.59 372.47 197C371.43 196.41 370.6 195.55 369.97 194.43C369.34 193.31 369.03 191.97 369.03 190.39L369.04 190.38ZM376.97 194.56C378.14 194.56 379.12 194.19 379.91 193.44C380.7 192.69 381.09 191.64 381.09 190.29V189.99C381.09 188.62 380.7 187.56 379.92 186.83C379.14 186.09 378.16 185.73 376.97 185.73C375.78 185.73 374.82 186.1 374.03 186.83C373.24 187.57 372.85 188.62 372.85 189.99V190.29C372.85 191.64 373.24 192.69 374.03 193.44C374.82 194.19 375.8 194.56 376.97 194.56Z"
                fill="#302C2D"
              />
              <path
                id="Vector_4"
                d="M390.98 181.06C390.29 181.06 389.71 180.84 389.24 180.39C388.77 179.94 388.53 179.36 388.53 178.63C388.53 177.9 388.77 177.32 389.24 176.88C389.71 176.44 390.29 176.21 390.98 176.21C391.67 176.21 392.27 176.43 392.73 176.88C393.19 177.33 393.43 177.91 393.43 178.63C393.43 179.35 393.2 179.94 392.73 180.39C392.26 180.84 391.68 181.06 390.98 181.06ZM389.07 197.82V182.81H392.88V197.82H389.07Z"
                fill="#302C2D"
              />
              <path
                id="Vector_5"
                d="M402.87 197.83C401.88 197.83 401.08 197.52 400.46 196.91C399.84 196.29 399.54 195.47 399.54 194.44V185.97H395.79V182.82H399.54V178.16H403.35V182.82H407.47V185.97H403.35V193.78C403.35 194.39 403.63 194.69 404.2 194.69H407.11V197.84H402.87V197.83Z"
                fill="#302C2D"
              />
              <path
                id="Vector_6"
                d="M415.58 198.25C414.51 198.25 413.55 198.07 412.7 197.69C411.85 197.32 411.18 196.77 410.69 196.06C410.2 195.35 409.95 194.47 409.95 193.44C409.95 192.41 410.2 191.55 410.69 190.85C411.18 190.15 411.87 189.63 412.75 189.28C413.63 188.93 414.63 188.75 415.76 188.75H419.88V187.9C419.88 187.2 419.66 186.61 419.21 186.16C418.76 185.71 418.06 185.48 417.09 185.48C416.12 185.48 415.44 185.7 414.97 186.13C414.51 186.56 414.2 187.12 414.06 187.81L410.55 186.63C410.79 185.86 411.18 185.16 411.72 184.53C412.25 183.9 412.97 183.38 413.87 182.99C414.77 182.6 415.86 182.4 417.15 182.4C419.13 182.4 420.69 182.89 421.84 183.88C422.99 184.87 423.56 186.3 423.56 188.18V193.78C423.56 194.39 423.84 194.69 424.41 194.69H425.62V197.84H423.08C422.33 197.84 421.72 197.66 421.23 197.3C420.75 196.94 420.5 196.45 420.5 195.85V195.82H419.92C419.84 196.06 419.66 196.38 419.38 196.77C419.1 197.16 418.65 197.51 418.05 197.81C417.44 198.11 416.62 198.26 415.57 198.26L415.58 198.25ZM416.25 195.17C417.32 195.17 418.19 194.87 418.87 194.28C419.55 193.69 419.88 192.89 419.88 191.91V191.61H416.04C415.33 191.61 414.78 191.76 414.38 192.06C413.98 192.36 413.77 192.79 413.77 193.33C413.77 193.87 413.98 194.32 414.4 194.66C414.82 195 415.44 195.18 416.25 195.18V195.17Z"
                fill="#302C2D"
              />
              <path
                id="Vector_7"
                d="M428.41 197.83V176.65H432.22V197.83H428.41Z"
                fill="#302C2D"
              />
              <path
                id="Vector_8"
                d="M444.03 197.83V176.65H451.44L455.1 195.11H455.64L459.3 176.65H466.71V197.83H462.84V179.58H462.3L458.67 197.83H452.07L448.44 179.58H447.89V197.83H444.02H444.03Z"
                fill="#302C2D"
              />
              <path
                id="Vector_9"
                d="M477.68 198.25C476.19 198.25 474.87 197.93 473.73 197.3C472.59 196.66 471.7 195.77 471.07 194.61C470.43 193.45 470.12 192.08 470.12 190.51V190.15C470.12 188.58 470.43 187.21 471.06 186.05C471.69 184.89 472.56 183.99 473.69 183.36C474.82 182.73 476.13 182.41 477.62 182.41C479.11 182.41 480.37 182.74 481.46 183.4C482.55 184.05 483.4 184.96 484 186.12C484.6 187.28 484.91 188.63 484.91 190.16V191.46H473.98C474.02 192.49 474.4 193.33 475.13 193.97C475.86 194.62 476.74 194.94 477.79 194.94C478.84 194.94 479.64 194.71 480.15 194.25C480.65 193.78 481.04 193.27 481.3 192.7L484.42 194.34C484.14 194.86 483.73 195.43 483.19 196.05C482.66 196.67 481.94 197.19 481.06 197.62C480.17 198.05 479.04 198.27 477.67 198.27L477.68 198.25ZM474.02 188.6H481.04C480.96 187.73 480.61 187.04 480 186.51C479.38 185.99 478.58 185.72 477.59 185.72C476.6 185.72 475.74 185.98 475.14 186.51C474.53 187.04 474.16 187.73 474.02 188.6Z"
                fill="#302C2D"
              />
              <path
                id="Vector_10"
                d="M494.36 198.25C493.17 198.25 492.05 197.95 491.02 197.36C489.98 196.77 489.15 195.89 488.52 194.74C487.89 193.59 487.58 192.2 487.58 190.56V190.08C487.58 188.44 487.89 187.05 488.52 185.9C489.15 184.75 489.97 183.88 491 183.28C492.03 182.68 493.15 182.39 494.36 182.39C495.27 182.39 496.03 182.5 496.64 182.71C497.25 182.92 497.76 183.19 498.14 183.51C498.52 183.84 498.82 184.18 499.02 184.54H499.57V176.64H503.38V197.82H499.63V196H499.09C498.75 196.57 498.22 197.08 497.5 197.55C496.78 198.02 495.74 198.24 494.37 198.24L494.36 198.25ZM495.51 194.92C496.68 194.92 497.66 194.54 498.45 193.78C499.24 193.02 499.63 191.92 499.63 190.47V190.17C499.63 188.72 499.24 187.61 498.46 186.85C497.68 186.1 496.7 185.72 495.51 185.72C494.32 185.72 493.36 186.1 492.57 186.85C491.78 187.61 491.39 188.71 491.39 190.17V190.47C491.39 191.92 491.78 193.03 492.57 193.78C493.36 194.53 494.34 194.92 495.51 194.92Z"
                fill="#302C2D"
              />
              <path
                id="Vector_11"
                d="M509.52 181.06C508.83 181.06 508.25 180.84 507.78 180.39C507.31 179.94 507.07 179.36 507.07 178.63C507.07 177.9 507.31 177.32 507.78 176.88C508.25 176.44 508.83 176.21 509.52 176.21C510.21 176.21 510.81 176.43 511.27 176.88C511.73 177.33 511.97 177.91 511.97 178.63C511.97 179.35 511.74 179.94 511.27 180.39C510.8 180.84 510.22 181.06 509.52 181.06ZM507.61 197.82V182.81H511.42V197.82H507.61Z"
                fill="#302C2D"
              />
              <path
                id="Vector_12"
                d="M520.32 198.25C519.25 198.25 518.29 198.07 517.44 197.69C516.59 197.32 515.92 196.77 515.43 196.06C514.94 195.35 514.69 194.47 514.69 193.44C514.69 192.41 514.94 191.55 515.43 190.85C515.92 190.15 516.61 189.63 517.49 189.28C518.37 188.93 519.37 188.75 520.5 188.75H524.62V187.9C524.62 187.2 524.4 186.61 523.95 186.16C523.5 185.71 522.8 185.48 521.83 185.48C520.86 185.48 520.18 185.7 519.71 186.13C519.25 186.56 518.94 187.12 518.8 187.81L515.29 186.63C515.53 185.86 515.92 185.16 516.46 184.53C516.99 183.9 517.71 183.38 518.61 182.99C519.51 182.6 520.6 182.4 521.89 182.4C523.87 182.4 525.43 182.89 526.58 183.88C527.73 184.87 528.3 186.3 528.3 188.18V193.78C528.3 194.39 528.58 194.69 529.15 194.69H530.36V197.84H527.82C527.07 197.84 526.46 197.66 525.97 197.3C525.49 196.94 525.24 196.45 525.24 195.85V195.82H524.66C524.58 196.06 524.4 196.38 524.12 196.77C523.84 197.16 523.39 197.51 522.79 197.81C522.18 198.11 521.36 198.26 520.31 198.26L520.32 198.25ZM520.99 195.17C522.06 195.17 522.93 194.87 523.61 194.28C524.29 193.69 524.62 192.89 524.62 191.91V191.61H520.78C520.07 191.61 519.52 191.76 519.12 192.06C518.72 192.36 518.51 192.79 518.51 193.33C518.51 193.87 518.72 194.32 519.14 194.66C519.56 195 520.18 195.18 520.99 195.18V195.17Z"
                fill="#302C2D"
              />
            </g>
          </g>
          <g id="Logomark">
            <g id="Border">
              <path
                id="Logo_Border"
                d="M48.26 65C72.38 65 92 84.62 92 108.74C92 132.86 72.38 152.48 48.26 152.48C24.14 152.48 4.52 132.85 4.52 108.74C4.52 84.63 24.14 65 48.26 65ZM48.26 60.48C21.61 60.47 0 82.08 0 108.74C0 135.4 21.61 157 48.26 157C74.91 157 96.52 135.39 96.52 108.74C96.52 82.09 74.91 60.48 48.26 60.48Z"
                fill="#302C2D"
              />
            </g>
            <g id="Symbol">
              <g id="AK">
                <path
                  id="Vector_13"
                  d="M42.93 98.75C41.13 97.39 38.74 96.72 35.78 96.72C33.55 96.72 31.53 97.27 29.71 98.39C27.87 99.5 26.44 100.94 25.41 102.69C24.37 104.44 23.86 106.2 23.86 107.99H33.56V105.98H32.9C32.9 106.32 32.7 106.63 32.31 106.87C31.91 107.11 31.44 107.24 30.9 107.24C30.01 107.24 29.44 107.11 29.19 106.84C28.95 106.57 28.82 106.11 28.82 105.47C28.82 103.09 29.3 101.21 30.26 99.8C31.23 98.39 32.7 97.68 34.67 97.68C37.83 97.68 40.09 98.87 41.45 101.24C42.44 102.98 43.07 105.04 43.34 107.4V99.09C43.21 98.97 43.07 98.86 42.94 98.76L42.93 98.75Z"
                  fill="#302C2D"
                />
                <path
                  id="Vector_14"
                  d="M72.6 131.98C71.41 131.98 70.31 131.43 69.29 130.31C68.29 129.2 66.72 127.07 64.59 123.91L54.07 107.98C56.43 105.8 58.32 104.03 59.7 102.64C60.89 101.45 61.94 100.55 62.88 99.93C63.82 99.32 64.85 99 65.99 99C66.53 99 67.23 99.12 68.07 99.37V98.27H55.47V99.37C56.35 99.13 57.07 99 57.61 99C58.26 99 58.76 99.12 59.13 99.37C59.51 99.63 59.69 99.97 59.69 100.41C59.69 101.01 59.31 101.67 58.58 102.42C57.15 103.85 55.1 105.75 52.43 108.13L47.9 112.31L47.53 112.65V106.16L47.6 83.87H46.41C46.41 84.85 46.02 85.66 45.23 86.27C44.43 86.89 43.47 87.2 42.34 87.2C41.84 87.2 41.34 87.07 40.82 86.8C40.29 86.52 40.04 86.24 40.04 85.94H39.38V87.94C40.16 88.09 40.91 88.17 41.6 88.17C42.24 88.17 42.81 88.08 43.3 87.94V107.4C43.4 108.27 43.45 109.18 43.45 110.13C43.41 110.24 43.36 110.36 43.3 110.46C42.96 111.05 42.27 111.51 41.23 111.87C39.99 112.3 38.14 112.75 35.67 113.24C35.23 113.34 34.37 113.52 33.11 113.8C31.85 114.07 30.75 114.35 29.82 114.64C28 115.24 26.31 116.33 24.78 117.93C23.25 119.55 22.49 121.48 22.49 123.76C22.49 126.92 23.42 129.34 25.31 131.06C27.18 132.76 29.51 133.61 32.28 133.61C35.05 133.61 37.26 132.78 38.94 131.1C40.62 129.42 41.79 127.61 42.47 125.69C42.87 124.51 43.16 123.57 43.31 122.85V128.43C43.31 129.67 43.19 130.58 42.94 131.21C42.7 131.82 42.12 132.13 41.24 132.13C40.84 132.13 40.22 132.01 39.39 131.76V132.87H51.24V131.76C50.4 132 49.78 132.13 49.39 132.13C48.59 132.13 48.09 131.84 47.86 131.25C47.64 130.65 47.53 129.72 47.53 128.43V113.98L47.9 113.64L50.42 111.24L55.17 118.21L62.87 129.47C63.07 129.71 63.16 130.06 63.16 130.5C63.16 130.9 62.98 131.25 62.61 131.54C62.24 131.83 61.68 131.98 60.94 131.98C60.49 131.98 59.92 131.91 59.23 131.76V132.87H73.98V131.76C73.48 131.91 73.01 131.98 72.57 131.98H72.6ZM43.32 120.2C43.32 121.44 42.9 122.97 42.06 124.79C41.23 126.63 40.09 128.21 38.66 129.54C37.23 130.87 35.67 131.54 34 131.54C31.72 131.54 29.98 130.71 28.77 129.05C27.56 127.4 26.96 125.49 26.96 123.31C26.96 121.44 27.5 119.75 28.59 118.24C29.68 116.73 31.38 115.56 33.71 114.71C35.19 114.17 37.53 113.47 40.74 112.64C41.49 112.49 42.1 112.35 42.6 112.19C43.09 112.04 43.33 111.9 43.33 111.75V120.2H43.32Z"
                  fill="#302C2D"
                />
              </g>
              <g id="Dots_2">
                <path
                  id="Dot_2_2"
                  d="M61.79 97.25C62.7013 97.25 63.44 96.5112 63.44 95.6C63.44 94.6887 62.7013 93.95 61.79 93.95C60.8787 93.95 60.14 94.6887 60.14 95.6C60.14 96.5112 60.8787 97.25 61.79 97.25Z"
                  fill="#302C2D"
                />
                <path
                  id="Dot_1_2"
                  d="M27.77 112.3C28.6813 112.3 29.42 111.561 29.42 110.65C29.42 109.739 28.6813 109 27.77 109C26.8587 109 26.12 109.739 26.12 110.65C26.12 111.561 26.8587 112.3 27.77 112.3Z"
                  fill="#302C2D"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_7_174">
            <rect width="531.04" height="203.88" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default InteractiveLogo;
