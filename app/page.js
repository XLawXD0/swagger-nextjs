function createITzpirePage() {
  const body = document.body;

  // Create the navigation bar
  const nav = document.createElement("nav");
  nav.classList.add("flex", "items-center", "justify-between", "p-4", "border-b", "border-gray-200");

  const navLeft = document.createElement("div");
  navLeft.classList.add("flex", "items-center", "space-x-2");

  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-bolt", "text-xl", "text-black");
  navLeft.appendChild(icon);

  const title = document.createElement("span");
  title.classList.add("font-semibold", "text-lg", "text-black");
  title.textContent = "ScrLxrd API";
  navLeft.appendChild(title);

  nav.appendChild(navLeft);

  const navRight = document.createElement("div");
  navRight.classList.add("flex", "items-center", "space-x-4");

  const navLinks = ["Home", "Docs"];
  for (const link of navLinks) {
    const a = document.createElement("a");
    a.classList.add("text-gray-600", "hover:text-gray-800");
    a.textContent = link;
    a.href = "#"; // Replace with actual links if needed
    navRight.appendChild(a);
  }

  const socialLinks = ["fab fa-github", "fas fa-sun"];
  for (const iconClass of socialLinks) {
    const a = document.createElement("a");
    a.classList.add("text-gray-600", "hover:text-gray-800");
    const icon = document.createElement("i");
    icon.classList.add(iconClass);
    a.appendChild(icon);
    navRight.appendChild(a);
  }

  nav.appendChild(navRight);
  body.appendChild(nav);

  // Create the main content
  const main = document.createElement("main");
  main.classList.add("flex", "flex-col", "items-center", "justify-center", "h-screen");

  const heading = document.createElement("h1");
  heading.classList.add("text-3xl", "font-bold", "text-center", "text-black");
  heading.textContent = "Welcome to ScrLxrd API";
  main.appendChild(heading);

  const description = document.createElement("p");
  description.classList.add("text-center", "text-gray-600", "mt-4");
  description.textContent = "A simple, free-to-use REST API without the need for an account, API key, or usage limits.";
  main.appendChild(description);

  const button = document.createElement("button");
  button.classList.add("mt-6", "px-4", "py-2", "border", "border-gray-300", "rounded", "text-gray-800", "hover:bg-gray-100");
  button.textContent = "Explore";
  main.appendChild(button);

  body.appendChild(main);
}

// Call the function to create the page content
createITzpirePage();
