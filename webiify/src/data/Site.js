// One place for contact details. Change here, it updates everywhere.
export const site = {
  name: "Webstore",
  whatsapp: "919351219914", // country code + number, no "+" or spaces
  instagram: "webstore",
  email: "adityaamishra7002@gmail.com",
};

export function waLink(message = "") {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}