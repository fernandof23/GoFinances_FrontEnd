const formatData = (value: Date): string =>
  Intl.DateTimeFormat('pt-BR').format(value); // TODO

export default formatData;
