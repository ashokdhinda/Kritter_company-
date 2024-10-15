function normlize(str) {
    str=str.trim()
  str = str.replace(/[^a-zA-Z0-9\s]/g, "");
    str = str.replace(/\s+/g, " ");
    const words = str.split(" ");

      const camelCase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    return camelCase;
}
  const input = " Hello! World@ This is a Test!. ";
   console.log(normlize(input));

