/* ===================================================================
   박만성 공인회계사 | 정동회계법인
   main.js
=================================================================== */
(function () {
  "use strict";

  const header   = document.getElementById("siteHeader");
  const nav       = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const toTop      = document.getElementById("toTop");

  /* ----- 헤더 스크롤 상태 & 맨 위로 버튼 ----- */
  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 40);
    toTop.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ----- 모바일 메뉴 토글 ----- */
  navToggle.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  });

  // 메뉴 항목 클릭 시 닫기
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      navToggle.classList.remove("open");
    });
  });

  /* ----- 스크롤 등장 애니메이션 ----- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ----- 서비스 아코디언: 한 번에 하나만 열기 ----- */
  const items = document.querySelectorAll(".service-item");
  items.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        items.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  /* ----- 푸터 연도 자동 갱신 ----- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
