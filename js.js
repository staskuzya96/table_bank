// jshint esversion: 6 
// sticky header
  document.addEventListener('DOMContentLoaded', () => {
    const stickyRow = document.querySelector('.tariffs-table-row--slipper-top');

    function checkSticky() {
      const rect = stickyRow.getBoundingClientRect();
      if (rect.top <= 72) {
        stickyRow.classList.add('stuck');
      } else {
        stickyRow.classList.remove('stuck');
      }
    }

    // Check on a scroll
    window.addEventListener('scroll', checkSticky);
    checkSticky();
  });


// toggle switches

// Toggle buttons
const buttons = document.querySelectorAll('.tariff-account-btn');
const background = document.querySelector('.tariff-account-background');

// Table's block
const tableHasAccount = document.querySelector('.tariffs-table--has-account');
const tableNoAccount = document.querySelector('.tariffs-table--no-account');

// Switch block
const switchBlock = document.querySelector('.tariff-main-btns__switch');

// toggle lines
const monthlyRow = document.querySelector('.tariffs-table-row.monthly');
const annualyRow = document.querySelector('.tariffs-table-row.annualy');

// checkbox and container
const switchInput = document.querySelector('.switch-container input');
const switchContainer = document.querySelector('.switch-container');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // change the active button
    buttons.forEach(b => b.classList.remove('tariff-account-btn--active'));
    btn.classList.add('tariff-account-btn--active');

    // shift the background
    background.style.left = index === 0 ? '0' : '50%';

    if (index === 0) {
      // has an account
      tableHasAccount.style.display = 'block';
      tableNoAccount.style.display = 'none';
      switchBlock.style.display = 'flex';

      switchContainer.classList.remove('checked');

      monthlyRow.style.display = 'none';
      annualyRow.style.display = 'grid';

    } else {
      // don't have an account
      tableHasAccount.style.display = 'none';
      tableNoAccount.style.display = 'block';
      switchBlock.style.display = 'none';
    }
  });
});

// change colour the element benefit
const checkbox = document.querySelector('input[name="switch"]');
const benefits = document.querySelector('.tochka-switch__benefits');
const slider = document.querySelector('.switch-container__slider');
const circle = document.querySelector('.switch-circle');

checkbox.addEventListener('change', function () {
  if (this.checked) {
    slider.style.backgroundColor = '#1919191a';
    benefits.classList.remove('tochka-switch__benefits--active');
  } else {
    slider.style.backgroundColor = '#915de6';
    benefits.classList.add('tochka-switch__benefits--active');
  }
});

// toggle swith
switchInput.addEventListener('change', () => {
  if (switchInput.checked) {
    // add class
    switchContainer.classList.add('checked');
    monthlyRow.style.display = 'grid';
    annualyRow.style.display = 'none';
  } else {
    switchContainer.classList.remove('checked');
    monthlyRow.style.display = 'none';
    annualyRow.style.display = 'grid';
  }
});

// popup window

const infoIcons = document.querySelectorAll('.info__container-cell__info');

let activeContainer = null;

infoIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.stopPropagation();

        const container = icon.closest('.table__sliper-cell').querySelector('.table__sliper-cell__price--info__container__text');

        if (!container) return;

        if (container === activeContainer) {
            container.style.display = 'none';
            activeContainer = null;
        } else {
            document.querySelectorAll('.table__sliper-cell__price--info__container__text').forEach(el => {
                el.style.display = 'none';
            });
            container.style.display = 'block';
            activeContainer = container;
        }
    });
});

// Click out - close everething
document.addEventListener('click', () => {
    if (activeContainer) {
        activeContainer.style.display = 'none';
        activeContainer = null;
    }
});




// MOBILE

const mobile_buttons = document.querySelectorAll('.tariff-mobile-account-btn');
// fint the indicator
const indicator = document.querySelector('.tariff-mobile-indicator__indicator');

mobile_buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get button`s coordinate and wildth
    const rect = button.getBoundingClientRect();
    const parentRect = button.parentElement.getBoundingClientRect();

    // Calculate the position relative to parent 
    const offsetLeft = rect.left - parentRect.left;

    // shift indicator
    indicator.style.transform = `translateX(${offsetLeft}px)`;
    indicator.style.width = `${rect.width}px`;
  });
});










// HAS ACCOUNT BUTTONS TOGGLE
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".has-account__mobile-tab");

    const blocks = document.querySelectorAll(".mobile-tariffs-table, .mobile-undertabs-has-account");

    // Hidden every block except "all-inclusive"
    blocks.forEach(block => {
        if (!block.classList.contains("all-inclusive")) {
            block.style.display = "none";
        }
    });

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Delete the active class
            buttons.forEach(btn => btn.classList.remove("has-account__mobile-tab--active"));
            this.classList.add("has-account__mobile-tab--active");

            const target = this.dataset.target;


            blocks.forEach(block => {
                if (block.classList.contains(target)) {
                    block.style.display = "flex";
                } else {
                    block.style.display = "none";
                }
            });
        });
    });
});




// NO ACCOUNT BUTTONS TOGGLE
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".no-account__mobile-tab");
    const blocks = document.querySelectorAll(".mobile-tariffs-table-no-account");

    // only a block with all-inclusive class
    blocks.forEach(block => {
        if (block.classList.contains("all-inclusive")) {
            block.style.display = "flex";
        } else {
            block.style.display = "none";
        }
    });

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // delete the active class
            buttons.forEach(btn => btn.classList.remove("no-account__mobile-tab--active"));
            // add the active class
            this.classList.add("no-account__mobile-tab--active");

            const targetClass = this.dataset.target;

            // switch between blocks
            blocks.forEach(block => {
                if (block.classList.contains(targetClass)) {
                    block.style.display = "flex";
                } else {
                    block.style.display = "none";
                }
            });
        });
    });
});


// TOGGLE ANNUALY AND MONTHLY
document.addEventListener("DOMContentLoaded", function () {
        const tabs = document.querySelectorAll(".has-account__mobile-undertab");

        tabs.forEach(tab => {
            tab.addEventListener("click", function () {
                const parent = tab.closest('.all-inclusive, .account-income, .account-staff, .account-base');
                if (!parent) return;

                const allTabsInParent = parent.querySelectorAll('.has-account__mobile-undertab');
                const title = tab.querySelector(".has-account__annualy__tittle")?.textContent.trim();

                allTabsInParent.forEach(t => {
                    t.classList.remove("tab__monthly", "tab__annualy");
                });

                if (title === "За месяц") {
                    tab.classList.add("tab__monthly");
                } else if (title === "За год") {
                    tab.classList.add("tab__annualy");
                }
            });
        });
});







// POPUP

document.addEventListener("DOMContentLoaded", function () {
    const infoButtons = document.querySelectorAll(".info__container-cell__info");

    infoButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation();

            // close all windows
            document.querySelectorAll(".mobile-tariffs-table__account--info__container__text").forEach(popup => {
                popup.style.display = "none";
            });

            // finding nearest popup
            const parent = button.closest(".table__account-text__header");
            const popup = parent?.querySelector(".mobile-tariffs-table__account--info__container__text");

            if (popup) {
                popup.style.display = "block";
            }
        });
    });

    // Click out - close everething
    document.addEventListener("click", function () {
        document.querySelectorAll(".mobile-tariffs-table__account--info__container__text").forEach(popup => {
            popup.style.display = "none";
        });
    });

    document.querySelectorAll(".mobile-tariffs-table__account--info__container__text").forEach(popup => {
        popup.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });
});



// TOGGLE
document.addEventListener("DOMContentLoaded", function () {
    const accountButtons = document.querySelectorAll(".tariff-mobile-account-btn");

    // close blocks "Not account" when loading the page
    hideElements([
        ".mobile-tabs-no-account",
        ".mobile-undertabs-no-account",
        ".mobile-tariffs-table-no-account"
    ]);

    accountButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // active class
            accountButtons.forEach(b => b.classList.remove("tariff-mobile-account-btn--active"));
            btn.classList.add("tariff-mobile-account-btn--active");

            const hasAccount = btn.textContent.includes("Есть счёт");

            if (hasAccount) {
                // show every block "has account"
                showElements([
                    ".mobile-tabs-has-account",
                    ".mobile-undertabs-has-account.all-inclusive",
                    ".mobile-tariffs-table.all-inclusive"
                ]);
                // hidde close "no account"
                hideElements([
                    ".mobile-tabs-no-account",
                    ".mobile-undertabs-no-account",
                    ".mobile-tariffs-table-no-account"
                ]);
            } else {
                // show every block "no account"
                showElements([
                    ".mobile-tabs-no-account",
                    ".mobile-undertabs-no-account",
                    ".mobile-tariffs-table-no-account.all-inclusive"
                ]);
                // hidde close "has account"
                hideElements([
                    ".mobile-tabs-has-account",
                    ".mobile-undertabs-has-account",
                    ".mobile-tariffs-table"
                ]);
            }
        });
    });

    function showElements(selectors) {
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.style.display = "flex");
        });
    }

    function hideElements(selectors) {
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.style.display = "none");
        });
    }
});



// DROPDOWN

document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".mobile-tariffs-table__account-header__dropdown");

    dropdowns.forEach(dropdown => {
        const icon = dropdown.querySelector(".mobile-tariffs-table__account-header__dropdown-icon");

        let isOpen = true; // if block is opened, means open

        dropdown.addEventListener("click", function () {
            const parent = dropdown.closest(".mobile-tariffs-table__account") ||
                           dropdown.closest(".mobile-tariffs-table__personnel");
            if (!parent) return;

            const texts = parent.querySelectorAll(".mobile-tariffs-table__account-text");

            // rotated icon
            if (icon) {
                icon.style.transition = "transform 0.02s ease";
                icon.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
            }

            texts.forEach((text, index) => {
                setTimeout(() => {
                    text.style.display = isOpen ? "block" : "none";
                }, index * 33);
            });

            isOpen = !isOpen;
        });
    });
});