<template>
  <div v-if="icon === 'arrowsLeft'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17.716"
      height="12.603"
      viewBox="0 0 17.716 12.603"
      :class="styling"
    >
      <g id="ArrowsLeft" transform="translate(-1431.411 -9952.15) rotate(90)">
        <path
          id="Pfad_110"
          data-name="Pfad 110"
          d="M0,0,5.594,5.594,11.188,0"
          transform="translate(9952.857 -1438.419)"
          class="fill-none stroke-current stroke-2"
        />
        <path
          id="Pfad_246"
          data-name="Pfad 246"
          d="M0,0,5.594,5.594,11.188,0"
          transform="translate(9952.857 -1448.42)"
          class="fill-none stroke-current stroke-2"
        />
      </g>
    </svg>
  </div>
  <div v-if="icon === 'arrowsTopBottom'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12.603"
      height="23.679"
      viewBox="0 0 12.603 23.679"
      :class="styling"
    >
      <g id="ArrowsTopBottom" transform="translate(0.707 1.414)">
        <path
          id="Pfad_110"
          data-name="Pfad 110"
          d="M0,0,5.594,5.594,11.188,0"
          transform="translate(0 15.256)"
          class="fill-none stroke-current stroke-2"
        />
        <path
          id="Pfad_123"
          data-name="Pfad 123"
          d="M0,5.594,5.594,0l5.594,5.594"
          class="fill-none stroke-current stroke-2"
        />
      </g>
    </svg>
  </div>
  <div v-if="icon === 'bell'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26.939"
      height="29.86"
      viewBox="0 0 26.939 29.86"
      :class="styling"
    >
      <g id="AppBellIcon" transform="translate(0.003 0)">
        <path
          id="Pfad_322"
          data-name="Pfad 322"
          d="M2.585,24.823H24.24a2.587,2.587,0,0,0,0-4.855,1.348,1.348,0,0,1-1.31-.327,1.388,1.388,0,0,1-.381-1.091l-.114-6.48c-.041-.576-.425-5.008-4.032-7.265A9.042,9.042,0,0,0,13.412,3.55,9.019,9.019,0,0,0,7.964,5.2a9.274,9.274,0,0,0-3.378,7.01L4.494,18.5a1.672,1.672,0,0,1-.382,1.145,1.778,1.778,0,0,1-1.527.546,2.487,2.487,0,0,0,0,4.636Z"
          class="fill-none stroke-current stroke-2"
          stroke-linejoin="round"
        />
        <path
          id="Pfad_323"
          data-name="Pfad 323"
          d="M11.192,3.767A2.491,2.491,0,0,1,13.519,1,2.5,2.5,0,0,1,15.93,3.8"
          class="fill-none stroke-current stroke-2"
        />
        <path
          id="Pfad_324"
          data-name="Pfad 324"
          d="M10.058,24.823a3.6,3.6,0,0,0,3.327,4.036,3.6,3.6,0,0,0,3.491-4.036"
          class="fill-none stroke-current stroke-2"
        />
      </g>
    </svg>
  </div>
  <div v-if="icon === 'checkbox'">
    <div v-if="type === 'active' || type === 'none'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        :class="styling"
      >
        <g id="AppCheckboxIcon" transform="translate(-473 -187)">
          <g
            id="Rechteck_42"
            data-name="Rechteck 42"
            transform="translate(473 187)"
            class="fill-none stroke-current stroke-2"
          >
            <rect width="29" height="29" rx="10" stroke="none" />
            <rect x="1" y="1" width="27" height="27" rx="9" fill="none" />
          </g>
          <path
            id="Pfad_53"
            data-name="Pfad 53"
            d="M4462.057,201.5l5.65,5.65,10.627-10.628"
            transform="translate(-3982.696 -0.336)"
            class="fill-none stroke-current stroke-2"
          />
        </g>
      </svg>
    </div>
    <div v-if="type === 'inactive'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        :class="styling"
      >
        <g id="AppCheckboxIconInactive" transform="translate(-473 -187)">
          <g
            id="Rechteck_42"
            data-name="Rechteck 42"
            transform="translate(473 187)"
            class="fill-none stroke-current stroke-2"
          >
            <rect width="29" height="29" rx="10" stroke="none" />
            <rect x="1" y="1" width="27" height="27" rx="9" fill="none" />
          </g>
        </g>
      </svg>
    </div>
  </div>
  <div v-if="icon === 'home'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.962"
      height="20.847"
      viewBox="0 0 20.962 20.847"
      :class="styling"
    >
      <path
        id="AppHomeIcon"
        d="M6.436,19.839H4.1a3.839,3.839,0,0,1-2.086-1.145,3.878,3.878,0,0,1-1-2.619V9.162A3.212,3.212,0,0,1,2.12,6.4L8.03,1.8a4.059,4.059,0,0,1,4.706-.091L18.566,6.2A3.51,3.51,0,0,1,19.955,9.2V16.1a4.219,4.219,0,0,1-2.945,3.62l-2.6.123A1.551,1.551,0,0,1,13.37,18.55v-2.8a2.095,2.095,0,0,0-1.677-1.964H9.2A1.846,1.846,0,0,0,7.6,15.544v2.945a1.31,1.31,0,0,1-.328.941A1.292,1.292,0,0,1,6.436,19.839Z"
        class="fill-none stroke-2 stroke-current"
      />
    </svg>
  </div>
  <div v-if="icon === 'lpa'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37.071"
      height="37.071"
      viewBox="0 0 37.071 37.071"
      :class="styling"
    >
      <g id="LPAIcon.vue" transform="translate(0 -0.003)">
        <path
          id="Pfad_48"
          data-name="Pfad 48"
          d="M102.982,91.06A11.944,11.944,0,1,0,114.926,103,11.958,11.958,0,0,0,102.982,91.06Zm0,21.716A9.772,9.772,0,1,1,112.754,103,9.783,9.783,0,0,1,102.982,112.776Z"
          transform="translate(-84.448 -84.466)"
          class="fill-current"
        />
        <path
          id="Pfad_49"
          data-name="Pfad 49"
          d="M177.214,196.378l-5.747,5.747-3.576-3.575a1.086,1.086,0,0,0-1.536,1.536l4.343,4.343a1.086,1.086,0,0,0,1.536,0l6.515-6.515a1.086,1.086,0,1,0-1.535-1.536Z"
          transform="translate(-154.018 -181.865)"
          class="fill-current"
        />
        <path
          id="Pfad_50"
          data-name="Pfad 50"
          d="M35.516,10.925l-3.792-2.27-.85-3.522a3.243,3.243,0,0,0-3.418-2.483l-4.317.334L20.646.784a3.244,3.244,0,0,0-4.225,0l-2.492,2.2L9.612,2.649A3.243,3.243,0,0,0,6.2,5.094L5.02,8.866,1.555,10.925A3.244,3.244,0,0,0,.25,14.943l1.477,3.58L.25,22.1A3.244,3.244,0,0,0,1.555,26.12l3.786,2.256.854,3.537a3.242,3.242,0,0,0,3.16,2.493c.229,0-.028.009,4.53-.341l2.537,2.226a3.244,3.244,0,0,0,4.225,0l2.537-2.226,4.273.331a3.244,3.244,0,0,0,3.418-2.483l.85-3.522c4.636-2.775,3.653-2.184,3.792-2.27A3.244,3.244,0,0,0,36.822,22.1l-1.477-3.58,1.477-3.58a3.244,3.244,0,0,0-1.305-4.018Zm-2.35,8.012,1.648,3.994a1.081,1.081,0,0,1-.431,1.337l-4.166,2.494a1.086,1.086,0,0,0-.5.677L28.763,31.4a1.081,1.081,0,0,1-1.139.828l-4.729-.366a1.086,1.086,0,0,0-.8.266l-2.862,2.511a1.081,1.081,0,0,1-1.4,0l-2.861-2.511a1.086,1.086,0,0,0-.8-.266l-4.729.366A1.081,1.081,0,0,1,8.306,31.4l-.961-3.981a1.086,1.086,0,0,0-.5-.678L2.687,24.267a1.081,1.081,0,0,1-.43-1.336l1.648-3.994a1.085,1.085,0,0,0,0-.828L2.257,14.114a1.081,1.081,0,0,1,.429-1.336l3.8-2.258a1.086,1.086,0,0,0,.481-.608c1.4-4.465,1.322-4.2,1.338-4.271a1.08,1.08,0,0,1,1.139-.828l4.775.37a1.086,1.086,0,0,0,.8-.268l2.814-2.483a1.081,1.081,0,0,1,1.4,0l2.814,2.483a1.086,1.086,0,0,0,.8.268l4.775-.37a1.081,1.081,0,0,1,1.139.828l.957,3.965a1.086,1.086,0,0,0,.5.677l4.166,2.494a1.081,1.081,0,0,1,.431,1.337l-1.648,3.994a1.086,1.086,0,0,0,0,.828Z"
          transform="translate(0 0)"
          class="fill-current"
        />
      </g>
    </svg>
  </div>
  <div v-if="icon === 'option'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="30"
      viewBox="0 0 8 30"
      :class="styling"
    >
      <g id="AppOptionIcon" transform="translate(474 -602.412) rotate(90)">
        <g
          id="Ellipse_4"
          data-name="Ellipse 4"
          transform="translate(602.412 466)"
          fill="none"
          stroke="#707070"
          stroke-width="2"
        >
          <circle cx="4" cy="4" r="4" stroke="none" />
          <circle cx="4" cy="4" r="3" fill="none" />
        </g>
        <g
          id="Ellipse_5"
          data-name="Ellipse 5"
          transform="translate(613.412 466)"
          fill="none"
          stroke="#707070"
          stroke-width="2"
        >
          <circle cx="4" cy="4" r="4" stroke="none" />
          <circle cx="4" cy="4" r="3" fill="none" />
        </g>
        <g
          id="Ellipse_6"
          data-name="Ellipse 6"
          transform="translate(624.412 466)"
          fill="none"
          stroke="#707070"
          stroke-width="2"
        >
          <circle cx="4" cy="4" r="4" stroke="none" />
          <circle cx="4" cy="4" r="3" fill="none" />
        </g>
      </g>
    </svg>
  </div>
  <div v-if="icon === 'plus'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.563"
      height="20.563"
      viewBox="0 0 20.563 20.563"
      :class="styling"
    >
      <g
        id="Gruppe_317"
        data-name="Gruppe 317"
        transform="translate(-1652.16 -47)"
      >
        <path
          id="Pfad_102"
          data-name="Pfad 102"
          d="M11613.981,47V67.563"
          transform="translate(-9951.539)"
          class="fill-none stroke-current stroke-2"
        />
        <path
          id="Pfad_103"
          data-name="Pfad 103"
          d="M0,0V20.563"
          transform="translate(1672.724 57.282) rotate(90)"
          class="fill-none stroke-current stroke-2"
        />
      </g>
    </svg>
  </div>
  <div v-if="icon === 'analytics'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="26"
      viewBox="0 0 28 26"
      :class="styling"
    >
      <g id="LPAAnalyticsIcon" transform="translate(-37 -323)">
        <g
          id="Rechteck_28"
          data-name="Rechteck 28"
          transform="translate(37 335)"
          class="fill-none stroke-current stroke-2"
        >
          <rect width="8" height="14" rx="3" stroke="none" />
          <rect x="1" y="1" width="6" height="12" rx="2" fill="none" />
        </g>
        <g
          id="Rechteck_29"
          data-name="Rechteck 29"
          transform="translate(47 323)"
          class="fill-none stroke-current stroke-2"
        >
          <rect width="8" height="26" rx="3" stroke="none" />
          <rect x="1" y="1" width="6" height="24" rx="2" fill="none" />
        </g>
        <g
          id="Rechteck_30"
          data-name="Rechteck 30"
          transform="translate(57 329)"
          class="fill-none stroke-current stroke-2"
        >
          <rect width="8" height="20" rx="3" stroke="none" />
          <rect x="1" y="1" width="6" height="18" rx="2" fill="none" />
        </g>
      </g>
    </svg>
  </div>
  <div v-if="icon === 'configuration'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27.943"
      height="28.83"
      viewBox="0 0 27.943 28.83"
      :class="styling"
    >
      <path
        id="LPAConfigurationIcon"
        d="M34.993,16.706l-1.2-.987a1.689,1.689,0,0,1,0-2.608l1.2-.987a2.245,2.245,0,0,0,.519-2.865l-2.368-4.1A2.246,2.246,0,0,0,30.4,4.174l-1.455.545a1.689,1.689,0,0,1-2.259-1.3l-.255-1.532A2.245,2.245,0,0,0,24.213,0H19.476a2.245,2.245,0,0,0-2.222,1.882L17,3.414a1.689,1.689,0,0,1-2.259,1.3l-1.455-.545a2.246,2.246,0,0,0-2.741.983l-2.368,4.1A2.245,2.245,0,0,0,8.7,12.123l1.2.987a1.689,1.689,0,0,1,0,2.608l-1.2.987a2.245,2.245,0,0,0-.519,2.865l2.368,4.1a2.245,2.245,0,0,0,2.741.983l1.455-.545A1.689,1.689,0,0,1,17,25.415l.255,1.532a2.245,2.245,0,0,0,2.222,1.882h4.736a2.245,2.245,0,0,0,2.222-1.882l.255-1.532a1.689,1.689,0,0,1,2.259-1.3l1.455.545a2.245,2.245,0,0,0,2.741-.983l2.368-4.1a2.245,2.245,0,0,0-.519-2.865Zm-3.8,5.841L29.739,22a3.942,3.942,0,0,0-5.271,3.043l-.255,1.532H19.476l-.255-1.532A3.942,3.942,0,0,0,13.95,22l-1.455.545-2.368-4.1,1.2-.987a3.942,3.942,0,0,0,0-6.086l-1.2-.987,2.368-4.1,1.455.545a3.942,3.942,0,0,0,5.271-3.043l.255-1.532h4.736l.255,1.532a3.942,3.942,0,0,0,5.271,3.043l1.455-.545,2.369,4.1h0l-1.2.987a3.942,3.942,0,0,0,0,6.086l1.2.987ZM21.845,8.859A5.556,5.556,0,1,0,27.4,14.415,5.562,5.562,0,0,0,21.845,8.859Zm0,8.859a3.3,3.3,0,1,1,3.3-3.3A3.307,3.307,0,0,1,21.845,17.718Z"
        transform="translate(-7.873)"
        class="fill-current"
      />
    </svg>
  </div>
  <div v-if="icon === 'dashboard'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      viewBox="0 0 27 27"
      :class="styling"
    >
      <g id="LPADashboard" transform="translate(-11563 199)">
        <g
          id="Rechteck_313"
          data-name="Rechteck 313"
          transform="translate(11563 -199)"
          class="fill-none stroke-current stroke-2"
        >
          <rect width="12" height="14" rx="3" stroke="none" />
          <rect x="1" y="1" width="10" height="12" rx="2" fill="none" />
        </g>
        <g
          id="Rechteck_314"
          data-name="Rechteck 314"
          transform="translate(11563 -182)"
          class="fill-none stroke-current stroke-2"
        >
          <rect width="12" height="10" rx="3" stroke="none" />
          <rect x="1" y="1" width="10" height="8" rx="2" fill="none" />
        </g>
        <g
          id="Rechteck_315"
          data-name="Rechteck 315"
          transform="translate(11578 -186)"
          class="fill-none stroke-current stroke-2"
        >
          <rect width="12" height="14" rx="3" stroke="none" />
          <rect x="1" y="1" width="10" height="12" rx="2" fill="none" />
        </g>
        <g
          id="Rechteck_316"
          data-name="Rechteck 316"
          transform="translate(11578 -199)"
          class="fill-none stroke-current stroke-2"
        >
          <rect width="12" height="10" rx="3" stroke="none" />
          <rect x="1" y="1" width="10" height="8" rx="2" fill="none" />
        </g>
      </g>
    </svg>
  </div>
  <div v-if="icon === 'history'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30.595"
      height="27.034"
      viewBox="0 0 30.595 27.034"
      :class="styling"
    >
      <g id="LPAHistoryArrowIcon" transform="translate(0.374)">
        <path
          id="Pfad_311"
          data-name="Pfad 311"
          d="M4.188,13.517a12.512,12.512,0,1,1,1.835,6.528"
          class="fill-none stroke-current stroke-2"
          stroke-linecap="round"
          stroke-miterlimit="10"
        />
        <path
          id="Pfad_312"
          data-name="Pfad 312"
          d="M1,8.258l3.188,5.259L9.653,10.01"
          class="fill-none stroke-current stroke-2"
          stroke-linecap="round"
          stroke-miterlimit="10"
        />
        <path
          id="Pfad_313"
          data-name="Pfad 313"
          d="M16.67,5.91v7.607l4.622,4.622"
          class="fill-none stroke-current stroke-2"
          stroke-linecap="round"
          stroke-miterlimit="10"
        />
      </g>
    </svg>
  </div>
  <div v-if="icon === 'question'">
    <svg
      id="LPAQuestionIcon"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="28.11"
      height="28.11"
      viewBox="0 0 28.11 28.11"
      :class="styling"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rechteck_361"
            data-name="Rechteck 361"
            width="28.11"
            height="28.11"
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Gruppe_396" data-name="Gruppe 396" clip-path="url(#clip-path)">
        <rect
          id="Rechteck_360"
          data-name="Rechteck 360"
          width="26.11"
          height="26.11"
          rx="6.292"
          transform="translate(1 1)"
          class="fill-none stroke-current stroke-2"
          stroke-linecap="round"
          stroke-miterlimit="10"
        />
        <line
          id="Linie_126"
          data-name="Linie 126"
          x2="13.999"
          transform="translate(7.224 19.552)"
          class="fill-none stroke-current stroke-2"
          stroke-linecap="round"
          stroke-miterlimit="10"
        />
        <line
          id="Linie_127"
          data-name="Linie 127"
          x2="13.999"
          transform="translate(7.224 7.851)"
          class="fill-none stroke-current stroke-2"
          stroke-linecap="round"
          stroke-miterlimit="10"
        />
        <line
          id="Linie_128"
          data-name="Linie 128"
          x2="13.999"
          transform="translate(7.19 13.719)"
          class="fill-none stroke-current stroke-2"
          stroke-linecap="round"
          stroke-miterlimit="10"
        />
      </g>
    </svg>
  </div>
  <div v-if="icon === 'divideLine'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="24"
      viewBox="0 0 2 24"
      :class="styling"
    >
      <rect id="LPADivideLine" class="fill-current" width="2" height="24" />
    </svg>
  </div>
  <div v-if="icon === 'lpaStatus'">
    <div v-if="type === 'green' || type === 'none'" class="text-cl-green">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="59"
        height="59"
        viewBox="0 0 59 59"
        :class="styling"
      >
        <g id="LPAEmojiGreen" transform="translate(-668 -162)">
          <g
            id="Ellipse_1"
            data-name="Ellipse 1"
            transform="translate(668 162)"
            class="fill-none stroke-4 stroke-current"
          >
            <circle cx="29.5" cy="29.5" r="29.5" stroke="none" />
            <circle cx="29.5" cy="29.5" r="27.5" fill="none" />
          </g>
          <g
            id="Ellipse_2"
            data-name="Ellipse 2"
            transform="translate(685 181)"
            class="fill-none stroke-4 stroke-current"
          >
            <circle cx="3.5" cy="3.5" r="3.5" stroke="none" />
            <circle cx="3.5" cy="3.5" r="1.5" fill="none" />
          </g>
          <g
            id="Ellipse_3"
            data-name="Ellipse 3"
            transform="translate(702 181)"
            class="fill-none stroke-4 stroke-current"
          >
            <circle cx="3.5" cy="3.5" r="3.5" stroke="none" />
            <circle cx="3.5" cy="3.5" r="1.5" fill="none" />
          </g>
          <path
            id="Pfad_74"
            data-name="Pfad 74"
            d="M6655.736,200.447s12.309,14.37,25.587,0"
            transform="translate(-5971.03 -2.947)"
            class="fill-none stroke-4 stroke-current"
          />
        </g>
      </svg>
    </div>
    <div v-if="type === 'yellow'" class="text-cl-yellow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="59"
        height="59"
        viewBox="0 0 59 59"
        :class="styling"
      >
        <g id="LPAEmojiYellow" transform="translate(-668 -162)">
          <g
            id="Ellipse_1"
            data-name="Ellipse 1"
            transform="translate(668 162)"
            class="fill-none stroke-4 stroke-current"
          >
            <circle cx="29.5" cy="29.5" r="29.5" class="stroke-none" />
            <circle cx="29.5" cy="29.5" r="27.5" class="fill-none" />
          </g>
          <g
            id="Ellipse_2"
            data-name="Ellipse 2"
            transform="translate(685 181)"
            class="fill-none stroke-4 stroke-current"
          >
            <circle cx="3.5" cy="3.5" r="3.5" class="stroke-none" />
            <circle cx="3.5" cy="3.5" r="1.5" class="fill-none" />
          </g>
          <g
            id="Ellipse_3"
            data-name="Ellipse 3"
            transform="translate(702 181)"
            class="fill-none stroke-4 stroke-current"
          >
            <circle cx="3.5" cy="3.5" r="3.5" class="stroke-none" />
            <circle cx="3.5" cy="3.5" r="1.5" class="fill-none" />
          </g>
          <path
            id="Pfad_75"
            data-name="Pfad 75"
            d="M684.707,205.692h25.549"
            transform="translate(0.019 -5)"
            class="fill-none stroke-4 stroke-current"
          />
        </g>
      </svg>
    </div>
    <div v-if="type === 'red'" class="text-cl-red">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="59"
        height="59"
        viewBox="0 0 59 59"
        :class="styling"
      >
        <g id="LPAEmojiRed" transform="translate(-668 -162)">
          <g
            id="Ellipse_1"
            data-name="Ellipse 1"
            transform="translate(668 162)"
            class="fill-none stroke-4 stroke-current"
          >
            <circle cx="29.5" cy="29.5" r="29.5" stroke="none" />
            <circle cx="29.5" cy="29.5" r="27.5" fill="none" />
          </g>
          <g
            id="Ellipse_2"
            data-name="Ellipse 2"
            transform="translate(685 181)"
            class="fill-none stroke-4 stroke-current"
          >
            <circle cx="3.5" cy="3.5" r="3.5" stroke="none" />
            <circle cx="3.5" cy="3.5" r="1.5" fill="none" />
          </g>
          <g
            id="Ellipse_3"
            data-name="Ellipse 3"
            transform="translate(702 181)"
            class="fill-none stroke-4 stroke-current"
          >
            <circle cx="3.5" cy="3.5" r="3.5" stroke="none" />
            <circle cx="3.5" cy="3.5" r="1.5" fill="none" />
          </g>
          <path
            id="Pfad_74"
            data-name="Pfad 74"
            d="M6655.736,206.834s12.309-14.37,25.587,0"
            transform="translate(-5971.03 -2.947)"
            class="fill-none stroke-4 stroke-current"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "AppListText",
  props: {
    icon: {
      type: String,
      required: true,
    },
    styling: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      default: "none",
      required: false,
    },
    width: {
      type: String,
      required: false,
    },
  },
  computed: {
    propWidth() {
      return {
        "h-": this.width,
      };
    },
    propHeight() {
      return "h-5";
    },
  },
  methods: {
    propStyling() {},
  },
});
</script>