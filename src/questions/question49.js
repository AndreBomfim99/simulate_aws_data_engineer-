const question49 = {
  id: 'q49',
  scenario: `A data engineer at a retail company is trying to find Revenue by each Product. However the query does not fetch products which have never been ordered.

  SELECT p.id, SUM(o.order_val)
  FROM products as p
  JOIN orders as o ON p.id = o.product_id
  GROUP BY p.id;

  How can the query be modified (minimally) to fetch ALL products.`,
  options: [
    { letter: 'A', text: 'Add dummy order data to orders table for products with 0 orders.' },
    { letter: 'B', text: 'Use two separate queries to fetch products with and without orders.' },
    { letter: 'C', text: 'Use LEFT JOIN to include products with no orders.' },
    { letter: 'D', text: 'Add WHERE condition to SELECT products with 0 orders.' },
  ],
  answer: 'C',
  explanation: `Using LEFT JOIN instead of INNER JOIN (JOIN) ensures all products are included in the result, even those with no matching orders. For products without orders, the SUM(o.order_val) will return NULL (or 0 if handled properly), thus including all products in the output.`,
}

export default question49