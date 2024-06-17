// Wymagania biznesowe:
// komponent może przyjąć dowolną ilość zakładek
// nazwy zakładek powinny zawijać się do kolejnego wiersza jeżeli nie mieszczą się na ekranie
// po kliknięciu w komponent zakładkę pojawia się przypisany do niej kontent
// aktywna zakładka ma inny styl sugerujący, że wyświetla się jej kontent

// Wymagania techniczne:
// komponent będzie można stworzyć za pomocą klasy lub funkcji np. new Tabs(container, config) lub createTabsComponent(container, config)
// container to element html, do którego należy “wstrzyknąć” komponent zakładek
// config to dowolny obiekt lub tablica na podstawie, której należy wygenerować komponent. Przykładowy schemat:
// const tabs = [ {label: string, content: string} ]
// domyślnie aktywna jest pierwsza zakładka
// komponent wyświetla się poprawnie na mobile oraz desktop

type Tab = {
  label: string;
  content: string;
};

// const tabs: {label:string,content:string}[] = [
const tabs: Tab[] = [
  { label: "Zakładka1", content: "content1" },
  { label: "Zakładka2", content: "content2" },
  { label: "Zakładka3", content: "content3" },
  { label: "Zakładka4", content: "content4" },
  { label: "Zakładka5", content: "content5" },
  { label: "Zakładka6", content: "content6" },
  { label: "Zakładka7", content: "content7" },
  { label: "Zakładka8", content: "content8" },
  { label: "Zakładka9", content: "content9" },
  { label: "Zakładka10", content: "content10" },
];

function createTabsComponent(container: HTMLElement, config: Tab[]): void {
  const tabsContainer = document.createElement("div");
  const contentContainer = document.createElement("div");
  container.appendChild(tabsContainer);
  container.appendChild(contentContainer);
  contentContainer.classList.add("contentContainer");
  tabsContainer.classList.add("tabsContainer");

  config.map((tab, index): void => {
    const newTab = document.createElement("div");
    newTab.innerHTML = tab.label;
    newTab.classList.add("tabElement");
    if (index === 0) {
      newTab.classList.add("active");
    }

    newTab.addEventListener("click", function (): void {
      const activeTab = document.querySelector(".tabElement.active");
      if (activeTab) {
        activeTab.classList.remove("active");
      }
      newTab.classList.add("active");
      showContent();
    });
    tabsContainer.appendChild(newTab);
  });
  function showContent(): void {
    try {
      config.map((tab) => {
        const activeTab = document.querySelector(
          ".tabElement.active"
        ) as HTMLElement;
        if (activeTab.innerHTML === tab.label) {
          contentContainer.classList.add("showContent");
          contentContainer.innerHTML = tab.content;
        }
      });
    } catch {
      console.log("Ups coś poszło nie tak");
    }
  }
  showContent();
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("mainContainer") as HTMLElement;
  createTabsComponent(container, tabs);
});
