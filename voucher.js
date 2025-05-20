const vouchers = [
  {
    id: "a",
    logoSrc: "img/kolin_logo.png",
    value: "P100",
    dateRange: "Sep 10 - Sep 20, 2025",
    code: "KOLIN100",
    terms1: "See applicable items",
    terms2: "min. spend of P30,000",
    modalTitle: "Voucher A Details",
    backgroundColor: "#F16224",
    modalContent: "Voucher A: Enjoy a P100 discount on your next purchase!",
  },
  {
    id: "b",
    logoSrc: "img/samsung_logo.png",
    value: "P200",
    dateRange: "Oct 1 - Oct 10, 2025",
    code: "SAMSUNG100",
    terms1: "See applicable items",
    terms2: " min. spend of P50,000",
    modalTitle: "Voucher B Details",
    backgroundColor: "#1528A1",
    modalContent:
      "Voucher B: Enjoy a P200 discount when you spend more than P50,000!",
  },
  {
    id: "c",
    logoSrc: "img/kolin_logo.png",
    value: "P300",
    dateRange: "Oct 1 - Oct 10, 2025",
    code: "BENZPOGI",
    terms1: "See applicable items",
    terms2: " min. spend of P50,000",
    modalTitle: "Voucher C Details",
    backgroundColor: "#00925F",
    modalContent:
      "Voucher B: Enjoy a P200 discount when you spend more than P50,000!",
  },

  {
    id: "d",
    logoSrc: "img/kolin_logo.png",
    value: "P300",
    dateRange: "Oct 1 - Oct 10, 2025",
    code: "BENZPOGI",
    terms1: "See applicable items",
    terms2: " min. spend of P50,000",
    modalTitle: "Voucher C Details",
    backgroundColor: "#00925F",
    modalContent:
      "Voucher B: Enjoy a P200 discount when you spend more than P50,000!",
  },

  {
    id: "d",
    logoSrc: "img/kolin_logo.png",
    value: "P300",
    dateRange: "Oct 1 - Oct 10, 2025",
    code: "BENZPOGI",
    terms1: "See applicable items",
    terms2: " min. spend of P50,000",
    modalTitle: "Voucher C Details",
    backgroundColor: "#00925F",
    modalContent:
      "Voucher B: Enjoy a P200 discount when you spend more than P50,000!",
  },
  {
    id: "d",
    logoSrc: "img/kolin_logo.png",
    value: "P300",
    dateRange: "Oct 1 - Oct 10, 2025",
    code: "BENZPOGI",
    terms1: "See applicable items",
    terms2: " min. spend of P50,000",
    modalTitle: "Voucher C Details",
    backgroundColor: "red",
    modalContent:
      "Voucher B: Enjoy a P200 discount when you spend more than P50,000!",
  },
  {
    id: "",
    logoSrc: "img/kolin_logo.png",
    value: "P300",
    dateRange: "Oct 1 - Oct 10, 2025",
    code: "BENZPOGI",
    terms1: "See applicable items",
    terms2: " min. spend of P50,000",
    modalTitle: "Voucher C Details",
    backgroundColor: "red",
    modalContent:
      "Voucher B: Enjoy a P200 discount when you spend more than P50,000!",
  },
  {
    id: "b",
    logoSrc: "img/samsung_logo.png",
    value: "P200",
    dateRange: "Oct 1 - Oct 10, 2025",
    code: "SAMSUNG100",
    terms1: "See applicable items",
    terms2: " min. spend of P50,000",
    modalTitle: "Voucher B Details",
    backgroundColor: "#1528A1",
    modalContent:
      "Voucher B: Enjoy a P200 discount when you spend more than P50,000!",
  },
  {
    id: "c",
    logoSrc: "img/kolin_logo.png",
    value: "P300",
    dateRange: "Oct 1 - Oct 10, 2025",
    code: "BENZPOGI",
    terms1: "See applicable items",
    terms2: " min. spend of P50,000",
    modalTitle: "Voucher C Details",
    backgroundColor: "#00925F",
    modalContent:
      "Voucher B: Enjoy a P200 discount when you spend more than P50,000!",
  },

  {
    id: "d",
    logoSrc: "img/kolin_logo.png",
    value: "P300",
    dateRange: "Oct 1 - Oct 10, 2025",
    code: "BENZPOGI",
    terms1: "See applicable items",
    terms2: " min. spend of P50,000",
    modalTitle: "Voucher C Details",
    backgroundColor: "#00925F",
    modalContent:
      "Voucher B: Enjoy a P200 discount when you spend more than P50,000!",
  },

  {
    id: "d",
    logoSrc: "img/kolin_logo.png",
    value: "P300",
    dateRange: "Oct 1 - Oct 10, 2025",
    code: "BENZPOGI",
    terms1: "See applicable items",
    terms2: " min. spend of P50,000",
    modalTitle: "Voucher C Details",
    backgroundColor: "#00925F",
    modalContent:
      "Voucher B: Enjoy a P200 discount when you spend more than P50,000!",
  },
  {
    id: "d",
    logoSrc: "img/kolin_logo.png",
    value: "P300",
    dateRange: "Oct 1 - Oct 10, 2025",
    code: "BENZPOGI",
    terms1: "See applicable items",
    terms2: " min. spend of P50,000",
    modalTitle: "Voucher C Details",
    backgroundColor: "red",
    modalContent:
      "Voucher B: Enjoy a P200 discount when you spend more than P50,000!",
  },
  {
    id: "",
    logoSrc: "img/kolin_logo.png",
    value: "P300",
    dateRange: "Oct 1 - Oct 10, 2025",
    code: "BENZPOGI",
    terms1: "See applicable items",
    terms2: " min. spend of P50,000",
    modalTitle: "Voucher C Details",
    backgroundColor: "red",
    modalContent:
      "Voucher B: Enjoy a P200 discount when you spend more than P50,000!",
  },
];

function withDefaults(voucher) {
  return {
    id: "",
    logoSrc: "",
    value: "",
    dateRange: "",
    code: "",
    terms: "",
    modalTitle: "",
    modalContent: "",
  };
}

function createVoucherHTML(voucher) {
  return `
            <button class="voucher-item" data-target="#modal-${voucher.id}">
                <div class="voucher-top" style="background-color: ${voucher.backgroundColor};">
                    <img src="${voucher.logoSrc}" alt="" class="voucher-logo">
                    <div class="voucher-value">
                        <p>${voucher.value}</p>
                        <p>VOUCHER</p>
                        <div class="voucher-value-bg"></div>
                    </div>
                    <p class="voucher-tc">T&C</p>
                </div>
                <div class="voucher-btm">
                    <p class="voucher-date">${voucher.dateRange}</p>
                    <strong class="voucher-code">${voucher.code}</strong>
                    <p>${voucher.terms1}</p>
                    <p>${voucher.terms2}</p>
                </div>
            </button>
        `;
}

function createModalHTML(voucher) {
  return `
      <div id="modal-${voucher.id}" class="modal hidden">
        <div class="modal-content">
          <span class="close-btn">&times;</span>
          <h2>${voucher.modalTitle}</h2>
          <p>${voucher.modalContent}</p>
        </div>
      </div>
    `;
}

function renderVouchers() {
  const voucherContainer = document.getElementById("voucher-container");
  const modalContainer = document.querySelector(".modal-container");

  vouchers.forEach((voucher) => {
    voucherContainer.innerHTML += createVoucherHTML(voucher);
    modalContainer.innerHTML += createModalHTML(voucher);
  });
}

renderVouchers();
