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
  <!--Gerätemanager Logo-->
  <div v-if="icon === 'gm'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50.534"
      height="45.247"
      viewBox="0 0 50.534 45.247"
      :class="styling"
    >
      <path
        id="gmIcon"
        d="M47.21,36.569V31.295A4.517,4.517,0,0,0,42.7,26.783H4.512A4.517,4.517,0,0,0,0,31.295v23.25a4.517,4.517,0,0,0,4.512,4.512H15.085L14.5,63.8H11.878a4.117,4.117,0,0,0,0,8.233H45.8A4.738,4.738,0,0,0,50.534,67.3V41.088A4.741,4.741,0,0,0,47.21,36.569ZM3.158,54.545V31.295a1.355,1.355,0,0,1,1.353-1.353H42.7a1.355,1.355,0,0,1,1.353,1.353v5.06H33.479a4.738,4.738,0,0,0-4.733,4.733V55.9H4.512a1.355,1.355,0,0,1-1.353-1.353Zm15.109,4.512H28.746V63.8H17.682ZM10.92,67.914a.971.971,0,0,1,.958-.958H28.746V67.3a4.712,4.712,0,0,0,.27,1.575H11.878a.971.971,0,0,1-.958-.958ZM47.376,67.3A1.576,1.576,0,0,1,45.8,68.872H33.479A1.576,1.576,0,0,1,31.9,67.3V41.088a1.576,1.576,0,0,1,1.575-1.575H45.8a1.576,1.576,0,0,1,1.575,1.575Zm-5.441-3.006A2.294,2.294,0,1,1,39.64,62,2.3,2.3,0,0,1,41.935,64.292Z"
        transform="translate(0 -26.783)"
        class="fill-current"
      />
    </svg>
  </div>
  <!--Urlaubsplanung Logo-->
  <div v-if="icon === 'up'">
    <svg
      id="upIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="44.723"
      height="44.723"
      viewBox="0 0 44.723 44.723"
      :class="styling"
    >
      <g id="Gruppe_111" data-name="Gruppe 111" transform="translate(0)">
        <path
          id="Pfad_90"
          data-name="Pfad 90"
          d="M44.723,20.964V19.217a19.217,19.217,0,0,0-38.434,0v1.747h17.47V34.241H12.6L2.453,24.262,0,26.75l10.132,9.969v8h3.494V37.735H23.759v6.988h3.494V37.735H37.735v6.988h3.494V37.735h3.494V34.241H27.253V20.964Zm-3.59-3.494H34.207A34.652,34.652,0,0,0,32.069,6.215q-.342-.854-.727-1.6A15.765,15.765,0,0,1,41.132,17.47ZM18.943,6.215A34.652,34.652,0,0,0,16.8,17.47H9.88a15.765,15.765,0,0,1,9.79-12.852Q19.286,5.362,18.943,6.215ZM20.3,17.47a30.962,30.962,0,0,1,1.886-9.957c.976-2.441,2.279-4.019,3.319-4.019s2.343,1.577,3.319,4.019a30.963,30.963,0,0,1,1.886,9.957Z"
          transform="translate(0 0)"
          class="fill-current"
        />
      </g>
    </svg>
  </div>
  <!--Werkzeugausgabe Logo-->
  <div v-if="icon === 'wa'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48.457"
      height="48.455"
      viewBox="0 0 48.457 48.455"
      :class="styling"
    >
      <g id="waIcon" transform="translate(0 -0.013)">
        <g id="Gruppe_92" data-name="Gruppe 92" transform="translate(0 0.013)">
          <g id="Gruppe_91" data-name="Gruppe 91" transform="translate(0 0)">
            <path
              id="Pfad_78"
              data-name="Pfad 78"
              d="M34.188,26.17l-2.933-2.933,7.751-7.751,1,1a1.42,1.42,0,0,0,2.221-.273L48.254,6.178a1.419,1.419,0,0,0-.214-1.734L44.026.428A1.42,1.42,0,0,0,42.291.215L32.253,6.238a1.42,1.42,0,0,0-.273,2.221l1,1-7.751,7.751L22.3,14.281A11.322,11.322,0,0,0,5.963,1.382a1.42,1.42,0,0,0-.331,2.254L10.96,8.963a1.42,1.42,0,1,1-2.008,2.008L3.624,5.643a1.42,1.42,0,0,0-2.254.331,11.323,11.323,0,0,0,12.9,16.337l.925.925L2.082,36.349A7.1,7.1,0,0,0,12.12,46.387L25.233,33.274l.925.925A11.323,11.323,0,0,0,42.5,47.1a1.42,1.42,0,0,0,.331-2.254L37.5,39.517a1.42,1.42,0,1,1,2.008-2.008l5.328,5.328a1.42,1.42,0,0,0,2.254-.331,11.323,11.323,0,0,0-12.9-16.337ZM42.8,3.22l2.448,2.448L40.732,13.2,35.273,7.737Zm-7.81,8.25L37,13.478l-7.751,7.751L27.24,19.222ZM10.113,44.38A4.259,4.259,0,1,1,4.09,38.357L17.2,25.243l6.023,6.023Zm35.214-5.065L41.514,35.5a4.259,4.259,0,0,0-6.023,6.023L39.3,45.338a8.409,8.409,0,0,1-8.2-2.174,8.563,8.563,0,0,1-2-8.886,1.419,1.419,0,0,0-.334-1.48l-13.1-13.1a1.42,1.42,0,0,0-1.48-.334,8.563,8.563,0,0,1-8.886-2,8.408,8.408,0,0,1-2.174-8.2l3.813,3.813a4.259,4.259,0,0,0,6.023-6.023L9.154,3.143a8.408,8.408,0,0,1,8.2,2.174,8.563,8.563,0,0,1,2,8.886,1.419,1.419,0,0,0,.334,1.48l13.1,13.1a1.42,1.42,0,0,0,1.48.334,8.563,8.563,0,0,1,8.886,2A8.408,8.408,0,0,1,45.327,39.315Z"
              transform="translate(0 -0.013)"
              class="fill-current"
            />
          </g>
        </g>
        <g
          id="Gruppe_94"
          data-name="Gruppe 94"
          transform="translate(7.36 29.88)"
        >
          <g id="Gruppe_93" data-name="Gruppe 93">
            <path
              id="Pfad_79"
              data-name="Pfad 79"
              d="M88.865,316.007a1.42,1.42,0,0,0-2.008,0l-8.675,8.675a1.42,1.42,0,1,0,2.008,2.008l8.675-8.675A1.42,1.42,0,0,0,88.865,316.007Z"
              transform="translate(-77.767 -315.591)"
              class="fill-current"
            />
          </g>
        </g>
      </g>
    </svg>
  </div>
  <!--Fuhrparkverwaltung Logo-->
  <div v-if="icon === 'fv'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50.162"
      height="39.027"
      viewBox="0 0 50.162 39.027"
      :class="styling"
    >
      <g id="fvIcon" transform="translate(0.5 -52.5)">
        <g id="Gruppe_113" data-name="Gruppe 113" transform="translate(0 53)">
          <g id="Gruppe_112" data-name="Gruppe 112" transform="translate(0 0)">
            <path
              id="Pfad_91"
              data-name="Pfad 91"
              d="M47.281,67.129,46.21,65.994,42.449,55.857A4.411,4.411,0,0,0,38.342,53H11.482a4.4,4.4,0,0,0-4.107,2.857L3.666,65.868,2.122,67.3A6.036,6.036,0,0,0,0,71.887V86.657a4.391,4.391,0,0,0,4.391,4.37H7.164a4.391,4.391,0,0,0,4.391-4.37V84.514H37.606v2.143A4.391,4.391,0,0,0,42,91.027h2.773a4.391,4.391,0,0,0,4.391-4.37V71.5A6.091,6.091,0,0,0,47.281,67.129ZM9.349,56.572A2.272,2.272,0,0,1,11.482,55.1H38.352a2.287,2.287,0,0,1,2.132,1.471L43.762,65.4H41.315a7.205,7.205,0,0,0-14.255,0H6.072ZM39.172,65.4h-9.99a5.1,5.1,0,0,1,9.99,0ZM9.454,86.657a2.284,2.284,0,0,1-2.29,2.269H4.391A2.284,2.284,0,0,1,2.1,86.657V83.9a4.266,4.266,0,0,0,2.29.609H9.454Zm37.607,0a2.284,2.284,0,0,1-2.29,2.269H42a2.291,2.291,0,0,1-2.29-2.269V84.514h5.063a4.266,4.266,0,0,0,2.29-.609v2.752Zm-2.29-4.244H4.391A2.266,2.266,0,0,1,2.1,80.165V71.887a3.944,3.944,0,0,1,1.4-3l.042-.042L4.969,67.5H44.75l1.008,1.082c.011.021.042.032.053.053A3.959,3.959,0,0,1,47.05,71.5v8.666h.011A2.273,2.273,0,0,1,44.771,82.413Z"
              transform="translate(0 -53)"
              class="fill-current stroke-current stroke-1"
            />
          </g>
        </g>
        <g
          id="Gruppe_115"
          data-name="Gruppe 115"
          transform="translate(4.937 71.698)"
        >
          <g id="Gruppe_114" data-name="Gruppe 114" transform="translate(0 0)">
            <path
              id="Pfad_92"
              data-name="Pfad 92"
              d="M55.929,231H48.05A1.054,1.054,0,0,0,47,232.05v5.462a1.054,1.054,0,0,0,1.05,1.05h7.878a1.054,1.054,0,0,0,1.05-1.05V232.05A1.054,1.054,0,0,0,55.929,231Zm-1.05,5.462H49.1V233.1h5.778Z"
              transform="translate(-47 -231)"
              class="fill-current stroke-current stroke-1"
            />
          </g>
        </g>
        <g
          id="Gruppe_117"
          data-name="Gruppe 117"
          transform="translate(34.245 71.698)"
        >
          <g id="Gruppe_116" data-name="Gruppe 116" transform="translate(0 0)">
            <path
              id="Pfad_93"
              data-name="Pfad 93"
              d="M334.929,231H327.05a1.054,1.054,0,0,0-1.05,1.05v5.462a1.054,1.054,0,0,0,1.05,1.05h7.878a1.054,1.054,0,0,0,1.05-1.05V232.05A1.054,1.054,0,0,0,334.929,231Zm-1.05,5.462H328.1V233.1h5.778Z"
              transform="translate(-326 -231)"
              class="fill-current stroke-current stroke-1"
            />
          </g>
        </g>
        <g
          id="Gruppe_119"
          data-name="Gruppe 119"
          transform="translate(18.457 76.11)"
        >
          <g id="Gruppe_118" data-name="Gruppe 118" transform="translate(0 0)">
            <path
              id="Pfad_94"
              data-name="Pfad 94"
              d="M186.9,273H176.75a1.05,1.05,0,0,0,0,2.1H186.9a1.05,1.05,0,1,0,0-2.1Z"
              transform="translate(-175.7 -273)"
              class="fill-current stroke-current stroke-1"
            />
          </g>
        </g>
        <g
          id="Gruppe_121"
          data-name="Gruppe 121"
          transform="translate(18.457 72.854)"
        >
          <g id="Gruppe_120" data-name="Gruppe 120">
            <path
              id="Pfad_95"
              data-name="Pfad 95"
              d="M186.9,242H176.75a1.05,1.05,0,1,0,0,2.1H186.9a1.05,1.05,0,1,0,0-2.1Z"
              transform="translate(-175.7 -242)"
              class="fill-current stroke-current stroke-1"
            />
          </g>
        </g>
      </g>
    </svg>
  </div>
  <!--Büromittelausgabe Logo-->
  <div v-if="icon === 'bma'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48.457"
      height="42.755"
      viewBox="0 0 48.457 42.755"
      :class="styling"
    >
      <g id="bmaIcon" transform="translate(0 -30.125)">
        <path
          id="Pfad_89"
          data-name="Pfad 89"
          d="M47.037,38.678H34.2V35.857a5.739,5.739,0,0,0-5.732-5.732H19.988a5.739,5.739,0,0,0-5.732,5.732v2.821H1.42A1.42,1.42,0,0,0,0,40.1v25.79A7,7,0,0,0,6.992,72.88H41.465a7,7,0,0,0,6.992-6.992V40.1A1.42,1.42,0,0,0,47.037,38.678ZM27.45,57.2a3.221,3.221,0,1,1-6.442,0V53.983H27.45Zm1.42-6.06H19.588a1.42,1.42,0,0,0-1.42,1.42v2.579C9.913,53.351,3.724,48,2.928,41.518h42.6c-.8,6.478-6.985,11.833-15.24,13.625V52.564a1.42,1.42,0,0,0-1.42-1.42ZM17.095,35.857a2.9,2.9,0,0,1,2.893-2.893h8.481a2.9,2.9,0,0,1,2.893,2.893v2.821H17.095V35.857ZM45.618,65.888a4.157,4.157,0,0,1-4.152,4.152H6.992a4.157,4.157,0,0,1-4.152-4.152V48.839A19.928,19.928,0,0,0,7.248,53.33a26.745,26.745,0,0,0,10.981,4.726,6.059,6.059,0,0,0,12,0A26.746,26.746,0,0,0,41.209,53.33a19.93,19.93,0,0,0,4.409-4.491Z"
          class="fill-current"
        />
      </g>
    </svg>
  </div>
  <!--Prüfmittelverwaltung Logo-->
  <div v-if="icon === 'pv'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="53.6"
      height="57.419"
      viewBox="0 0 53.6 57.419"
      :class="styling"
    >
      <g id="pvIcon" transform="translate(-17)">
        <path
          id="Pfad_80"
          data-name="Pfad 80"
          d="M101.268,63.2h0a25.2,25.2,0,0,0-19.114,9.075,1.685,1.685,0,0,0,0,2.212l9.181,10.553a1.685,1.685,0,0,0,1.271.579H109.93a1.685,1.685,0,0,0,1.271-.579l9.181-10.553a1.685,1.685,0,0,0,0-2.212A25.2,25.2,0,0,0,101.268,63.2Zm-.99,19.049.99-2.144.99,2.144Zm8.884,0h-3.193l-3.172-6.87a1.685,1.685,0,0,0-3.06,0l-3.172,6.87H93.373L85.685,73.41a24.313,24.313,0,0,1,3.048-2.654l1.451,1.74a1.685,1.685,0,0,0,2.588-2.158L91.62,68.956a20.83,20.83,0,0,1,7.963-2.319v2.075a1.685,1.685,0,1,0,3.37,0V66.637a20.83,20.83,0,0,1,7.963,2.319l-1.152,1.382a1.685,1.685,0,0,0,2.588,2.158l1.451-1.74a24.313,24.313,0,0,1,3.047,2.654Z"
          transform="translate(-57.468 -56.099)"
          class="fill-current"
        />
        <path
          id="Pfad_81"
          data-name="Pfad 81"
          d="M67.431,4.071A12.34,12.34,0,0,0,58.279,0H29.32A12.321,12.321,0,0,0,17.065,13.594l3.406,32.777A12.292,12.292,0,0,0,32.726,57.419H54.873A12.292,12.292,0,0,0,67.128,46.372l3.406-32.777a12.341,12.341,0,0,0-3.1-9.523Zm-.248,9.175L63.776,46.024a8.93,8.93,0,0,1-8.9,8.026H45.485V43.943a1.685,1.685,0,0,0-3.37,0V54.05H32.726a8.93,8.93,0,0,1-8.9-8.026L20.417,13.246a8.951,8.951,0,0,1,8.9-9.876H58.279a8.951,8.951,0,0,1,8.9,9.876Z"
          transform="translate(0)"
          class="fill-current"
        />
      </g>
    </svg>
  </div>
  <!--Bestellfreigabe-->
  <div v-if="icon === 'bf'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40.286"
      height="47"
      viewBox="0 0 40.286 47"
      :class="styling"
    >
      <g id="bfIcon" transform="translate(-4 -2)">
        <path
          id="XMLID_1124_"
          d="M24.143,2A10.082,10.082,0,0,0,14.071,12.071v3.357H5.679A1.679,1.679,0,0,0,4.01,17.292L6.869,43.026A6.709,6.709,0,0,0,13.543,49h21.2a6.705,6.705,0,0,0,6.672-5.974l2.86-25.734a1.679,1.679,0,0,0-1.669-1.863H34.214V12.071A10.082,10.082,0,0,0,24.143,2ZM17.429,12.071a6.714,6.714,0,1,1,13.429,0v3.357H17.429Zm23.3,6.714L38.078,42.657a3.352,3.352,0,0,1-3.335,2.986h-21.2a3.354,3.354,0,0,1-3.337-2.986L7.554,18.786h6.518v3.357a1.679,1.679,0,1,0,0,3.357h3.357a1.679,1.679,0,0,0,0-3.357V18.786H30.857v3.357a1.679,1.679,0,1,0,0,3.357h3.357a1.679,1.679,0,0,0,0-3.357V18.786Z"
          transform="translate(0)"
          class="fill-current"
        />
        <path
          id="XMLID_108_"
          d="M26.477,18.368a1.679,1.679,0,0,1,.262,2.36l-6.714,8.393a1.679,1.679,0,0,1-2.241.347l-5.036-3.357a1.679,1.679,0,1,1,1.863-2.793l3.755,2.5,5.752-7.191A1.678,1.678,0,0,1,26.477,18.368Z"
          transform="translate(5.429 10.857)"
          class="fill-current"
        />
      </g>
    </svg>
  </div>
  <!--Schulungscenter-->
  <div v-if="icon === 'sc'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="53.6"
      height="38.528"
      viewBox="0 0 53.6 38.528"
      :class="styling"
    >
      <g id="scIcon" transform="translate(0 -71.981)">
        <path
          id="Pfad_88"
          data-name="Pfad 88"
          d="M52.593,83.007,27.466,72.119a1.675,1.675,0,0,0-1.332,0L1.007,83.007a1.676,1.676,0,0,0,0,3.074L10.049,90v10.459c0,5.636,7.358,10.051,16.751,10.051s16.751-4.415,16.751-10.051V90l1.675-.726v17.885a1.675,1.675,0,1,0,3.35,0V87.822l4.016-1.74A1.677,1.677,0,0,0,52.593,83.007ZM26.8,75.481l20.914,9.063-1.659.719L27.008,82.882a1.675,1.675,0,0,0-.416,3.324l13.416,1.677L26.8,93.607,5.886,84.544Zm13.4,24.977c0,1.578-1.3,3.2-3.554,4.458-5.379,2.989-14.3,3-19.694,0-2.259-1.255-3.554-2.88-3.554-4.458V91.451L26.134,96.97a1.675,1.675,0,0,0,1.332,0L40.2,91.451Z"
          transform="translate(0 0)"
          class="fill-current"
        />
      </g>
    </svg>
  </div>
  <!--Vertragsverwaltung-->
  <div v-if="icon === 'vv'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="53.6"
      height="53.604"
      viewBox="0 0 53.6 53.604"
      :class="styling"
    >
      <g id="vvIcon" transform="translate(-0.018)">
        <g id="Gruppe_123" data-name="Gruppe 123" transform="translate(0.018)">
          <g id="Gruppe_122" data-name="Gruppe 122">
            <path
              id="Pfad_96"
              data-name="Pfad 96"
              d="M52.237,16.869a4.717,4.717,0,0,0-6.663,0L40.849,21.6V9.153a4.68,4.68,0,0,0-1.38-3.331L35.028,1.38A4.68,4.68,0,0,0,31.7,0H4.729A4.717,4.717,0,0,0,.018,4.711V48.893A4.717,4.717,0,0,0,4.729,53.6H36.138a4.717,4.717,0,0,0,4.711-4.711V34.93l11.388-11.4A4.709,4.709,0,0,0,52.237,16.869ZM31.427,3.141a1.714,1.714,0,0,1,1.38.46l4.442,4.442a1.714,1.714,0,0,1,.46,1.38H31.427Zm6.282,45.752a1.572,1.572,0,0,1-1.57,1.57H4.729a1.572,1.572,0,0,1-1.57-1.57V4.711a1.572,1.572,0,0,1,1.57-1.57H28.286v7.852a1.57,1.57,0,0,0,1.57,1.57h7.852V24.742l-4.633,4.637-2.22,2.22a1.57,1.57,0,0,0-.379.614l-2.221,6.663a1.57,1.57,0,0,0,1.986,1.986L36.9,38.641a1.569,1.569,0,0,0,.614-.379l.191-.191ZM34.186,32.71l2.221,2.221-.848.848-3.331,1.11,1.11-3.331Zm4.441,0-2.221-2.221,7.549-7.555,2.221,2.221Zm11.388-11.4L48.4,22.932l-2.221-2.221L47.8,19.09a1.57,1.57,0,1,1,2.22,2.221Z"
              transform="translate(-0.018)"
              class="fill-current"
            />
          </g>
        </g>
        <g
          id="Gruppe_125"
          data-name="Gruppe 125"
          transform="translate(6.3 15.704)"
        >
          <g id="Gruppe_124" data-name="Gruppe 124">
            <path
              id="Pfad_97"
              data-name="Pfad 97"
              d="M83.574,150H61.588a1.57,1.57,0,0,0,0,3.141H83.574a1.57,1.57,0,0,0,0-3.141Z"
              transform="translate(-60.018 -150)"
              class="fill-current"
            />
          </g>
        </g>
        <g
          id="Gruppe_127"
          data-name="Gruppe 127"
          transform="translate(6.3 21.986)"
        >
          <g id="Gruppe_126" data-name="Gruppe 126">
            <path
              id="Pfad_98"
              data-name="Pfad 98"
              d="M77.293,210h-15.7a1.57,1.57,0,0,0,0,3.141h15.7a1.57,1.57,0,0,0,0-3.141Z"
              transform="translate(-60.018 -210)"
              class="fill-current"
            />
          </g>
        </g>
        <g
          id="Gruppe_129"
          data-name="Gruppe 129"
          transform="translate(6.3 28.268)"
        >
          <g id="Gruppe_128" data-name="Gruppe 128">
            <path
              id="Pfad_99"
              data-name="Pfad 99"
              d="M77.293,270h-15.7a1.57,1.57,0,0,0,0,3.141h15.7a1.57,1.57,0,0,0,0-3.141Z"
              transform="translate(-60.018 -270)"
              class="fill-current"
            />
          </g>
        </g>
        <g
          id="Gruppe_131"
          data-name="Gruppe 131"
          transform="translate(6.3 34.55)"
        >
          <g id="Gruppe_130" data-name="Gruppe 130">
            <path
              id="Pfad_100"
              data-name="Pfad 100"
              d="M77.293,330h-15.7a1.57,1.57,0,0,0,0,3.141h15.7a1.57,1.57,0,0,0,0-3.141Z"
              transform="translate(-60.018 -330)"
              class="fill-current"
            />
          </g>
        </g>
        <g
          id="Gruppe_133"
          data-name="Gruppe 133"
          transform="translate(18.863 44.182)"
        >
          <g id="Gruppe_132" data-name="Gruppe 132">
            <path
              id="Pfad_101"
              data-name="Pfad 101"
              d="M191.011,422h-9.423a1.57,1.57,0,0,0,0,3.141h9.423a1.57,1.57,0,0,0,0-3.141Z"
              transform="translate(-180.018 -422)"
              class="fill-current"
            />
          </g>
        </g>
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
          class="fill-none stroke-current stroke-2"
        >
          <circle cx="4" cy="4" r="4" stroke="none" />
          <circle cx="4" cy="4" r="3" fill="none" />
        </g>
        <g
          id="Ellipse_5"
          data-name="Ellipse 5"
          transform="translate(613.412 466)"
          class="fill-none stroke-current stroke-2"
        >
          <circle cx="4" cy="4" r="4" stroke="none" />
          <circle cx="4" cy="4" r="3" fill="none" />
        </g>
        <g
          id="Ellipse_6"
          data-name="Ellipse 6"
          transform="translate(624.412 466)"
          class="fill-none stroke-current stroke-2"
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
  <div v-if="icon === 'arrow'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14.515"
      height="26.202"
      viewBox="0 0 14.515 26.202"
      :class="styling"
    >
      <path
        id="AppArrow"
        d="M0,0,12.394,12.394,24.788,0"
        transform="translate(13.808 0.707) rotate(90)"
        class="fill-none stroke-current stroke-2"
      />
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
    <div v-if="type === 'gray'" class="text-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="59"
        height="59"
        viewBox="0 0 59 59"
        :class="styling"
      >
        <g id="LPAEmojyNone" class="fill-none stroke-current" stroke-width="4">
          <circle cx="29.5" cy="29.5" r="29.5" stroke="none" />
          <circle cx="29.5" cy="29.5" r="27.5" fill="none" />
        </g>
      </svg>
    </div>
    <div v-if="type === 'green'" class="text-cl-green">
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
  <div v-if="icon === 'light'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27.551"
      height="27.55"
      viewBox="0 0 27.551 27.55"
      :class="styling"
    >
      <g id="AppLight" transform="translate(0 -0.003)">
        <path
          id="Pfad_114"
          data-name="Pfad 114"
          d="M103.321,183.46a.94.94,0,0,0-.94.94v2.673a.94.94,0,1,0,1.88,0V184.4A.94.94,0,0,0,103.321,183.46Z"
          transform="translate(-89.547 -160.46)"
          class="fill-current"
        />
        <path
          id="Pfad_115"
          data-name="Pfad 115"
          d="M103.321,4.557a.94.94,0,0,0,.94-.94V.943a.94.94,0,0,0-1.88,0V3.616A.94.94,0,0,0,103.321,4.557Z"
          transform="translate(-89.547)"
          class="fill-current"
        />
        <path
          id="Pfad_116"
          data-name="Pfad 116"
          d="M32.153,159.989l-1.891,1.89a.94.94,0,0,0,1.329,1.33l1.891-1.89a.94.94,0,1,0-1.329-1.33Z"
          transform="translate(-26.228 -139.691)"
          class="fill-current"
        />
        <path
          id="Pfad_117"
          data-name="Pfad 117"
          d="M160.649,33.76a.937.937,0,0,0,.665-.275L163.2,31.6a.94.94,0,1,0-1.329-1.33l-1.891,1.89a.94.94,0,0,0,.665,1.605Z"
          transform="translate(-139.689 -26.228)"
          class="fill-current"
        />
        <path
          id="Pfad_118"
          data-name="Pfad 118"
          d="M4.553,103.335a.94.94,0,0,0-.94-.94H.94a.94.94,0,1,0,0,1.88H3.613A.94.94,0,0,0,4.553,103.335Z"
          transform="translate(0 -89.557)"
          class="fill-current"
        />
        <path
          id="Pfad_119"
          data-name="Pfad 119"
          d="M187.066,102.395h-2.674a.94.94,0,0,0,0,1.88h2.674a.94.94,0,1,0,0-1.88Z"
          transform="translate(-160.456 -89.557)"
          class="fill-current"
        />
        <path
          id="Pfad_120"
          data-name="Pfad 120"
          d="M32.159,33.486a.94.94,0,0,0,1.329-1.33l-1.89-1.89A.94.94,0,0,0,30.27,31.6Z"
          transform="translate(-26.234 -26.229)"
          class="fill-current"
        />
        <path
          id="Pfad_121"
          data-name="Pfad 121"
          d="M161.32,159.989a.94.94,0,0,0-1.33,1.329l1.89,1.89a.94.94,0,1,0,1.33-1.329Z"
          transform="translate(-139.695 -139.691)"
          class="fill-current"
        />
        <path
          id="Pfad_122"
          data-name="Pfad 122"
          d="M58.833,51.518a7.318,7.318,0,1,0,7.318,7.318A7.326,7.326,0,0,0,58.833,51.518Zm0,12.755a5.437,5.437,0,1,1,5.438-5.437A5.443,5.443,0,0,1,58.833,64.273Z"
          transform="translate(-45.058 -45.057)"
          class="fill-current"
        />
      </g>
    </svg>
  </div>
  <div v-if="icon === 'dark'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.001"
      height="22"
      viewBox="0 0 20.001 22"
      :class="styling"
    >
      <path
        id="AppDark"
        d="M12.5,3a9,9,0,1,0,5.927,15.773A9.5,9.5,0,0,1,13.519,3.057,9.107,9.107,0,0,0,12.5,3Zm-11,9A11.007,11.007,0,0,1,15.978,1.561a1,1,0,0,1,.254,1.771A7.5,7.5,0,0,0,20.5,17a1,1,0,0,1,.8,1.6A11,11,0,0,1,1.5,12Z"
        transform="translate(-1.5 -1)"
        class="fill-current"
        fill-rule="evenodd"
      />
    </svg>
  </div>
  <div v-if="icon === 'logout'">
    <svg
      id="AppLogout"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="27.218"
      height="27.218"
      viewBox="0 0 27.218 27.218"
      :class="styling"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rechteck_413"
            data-name="Rechteck 413"
            width="27.218"
            height="27.218"
            transform="translate(0 0)"
            class="fill-none"
          />
        </clipPath>
      </defs>
      <path
        id="Pfad_364"
        data-name="Pfad 364"
        d="M13.609,12.524v0Z"
        class="fill-current"
      />
      <g id="Gruppe_422" data-name="Gruppe 422">
        <g id="Gruppe_421" data-name="Gruppe 421" clip-path="url(#clip-path)">
          <line
            id="Linie_152"
            data-name="Linie 152"
            y2="11.524"
            transform="translate(13.609 1)"
            class="fill-none stroke-current stroke-2"
            stroke-linecap="round"
            stroke-miterlimit="10"
          />
          <path
            id="Pfad_365"
            data-name="Pfad 365"
            d="M5.576,3.9a12.61,12.61,0,1,0,16.265.17"
            class="fill-none stroke-current stroke-2"
            stroke-linecap="round"
            stroke-miterlimit="10"
          />
        </g>
      </g>
    </svg>
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
  },
});
</script>