const test = (regex, str) => {
  console.log(str);
  console.log(regex.test(str));
}

test(/abc/, "betabc");
test(/[a]/, "taco");
test(/[a]/, "teco");
test(/[0123456789]/, "taco");
test(/[0123456789]/, "a1taco");
test(/[0-9]/, "taco");
test(/[0-9]/, "a1taco");
test(/\d/, "taco");
test(/\d/, "a1taco");
test(/\bcat\b/, "concatenate");
test(/\bcat\b/, " concatenate");
test(/\bcat\b/, "ta concatenate ");

