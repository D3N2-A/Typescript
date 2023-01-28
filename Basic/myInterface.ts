interface User {
  email: string;
  userId: number;
  startTrail(couponname: string, value: number): string;
}

const Anmol: User = {
  email: "afa@.com",
  githubToken: "fajd-423423-b-s.b-32-2-32",
  userId: 323412,
  startTrail: (name: "anmol10", value: 70) => {
    return `${name} Coupon code applied. You have availed ${value}% off!!`;
  },
};

interface User {
  githubToken: string;
}