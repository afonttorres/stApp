export class DataMapper{
  constructor(){}

  mapDataToQuiz(data, cut){
    return data
    .filter((v) => v.correction != undefined)
    .reduce((res, val, i) => {
      const eraseSpecial = (str) => str.replace(/^\s*\S+\s*|\s*\\[a-zA-Z]+\s*/g, "").trim();
      const formatter = str => eraseSpecial(str).substring(0, (eraseSpecial(str).length - parseInt(cut ?? 2)))
      let getParentVal = (parent) =>
        data.filter((v) => v.index == parent)[0].value;
      let value = !val.parent
        ? { ...val, answer: formatter(val.value) }
        : { ...val, answer:  formatter(`${(getParentVal(val.parent))}. ${val.value}`) };
      res = [...res, { ...value }];
      return res;
    }, []);
  }
}
