import Request from '../interfaces/Request';

export default function QueryBuilder(request: Request) {
  console.log(request);
  let string =
    `participants=${request.participants}` +
    `&minprice=0&maxprice=${request.price}` +
    `&minaccessibility=0&maxaccessibility=${request.accessibility}`;

  if (request.category !== '0') string += `&type=${request.category}`;
  return string;
}
