const request = require("supertest");

const app = require("../app");
const Customer = require("./customer")
const db = require("../db");

let test1ID, test2ID;

//TODO:prefer using built in functions instead of sql in 13~16

beforeEach(async () => {
  test1ID = await db.query(
    `INSERT INTO customers 
    (first_name, last_name, phone, notes)
     VALUES ('Tim', 'Jackson', '510', 'rithm1')
     RETURNING id`
  )

  test2ID = await db.query(
    `INSERT INTO customers 
    (first_name, last_name, phone, notes)
     VALUES ('Joel', 'Dicaprio', '510', 'rithm2')
     RETURNING id`
  )

  test1Reservation = await db.query(
    `INSERT INTO reservations
     (customer_id, num_guests, start_at, notes)
     VALUES (1, 3, current_timestamp,'rithmschool')
    `
  )

})

afterEach(async () => {
  await db.query(`
  DELETE FROM reservations;
  DELETE FROM customers;
  `)
})

afterAll(async () => {
  await db.end()
})

describe("creating new customers", function () {

  test("creating new customers", async function () {
    const results = await Customer.all();

    expect(results.length).toEqual(2)
    expect(results[0].phone).toEqual('510')

  })



})