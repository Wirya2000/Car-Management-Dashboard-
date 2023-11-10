# Binar: Challenge 05

# dbdiagram.io
```
Table cars {
  id integer [primary key]
  name varchar(50)
  type varchar(30)
  price integer
  photo varchar(255)
  start_rent date
  finish_rent date
  created_at timestamp
  updated_at timestamp
}

Table orders {
  id integer [primary key]
  email varchar(50)
  car_id integer
  start_rent date
  finish_rent date
  prince integer
  status varchar(50)
}

Ref: orders.car_id > cars.id
```

# API
** get all **
## Link
```
http://localhost:3000/v1/cars
```
## Response body
###
[
    {
        "id": 1,
        "name": "xpander",
        "type": "mitsubishi",
        "price": 500000,
        "photo": "http://res.cloudinary.com/dyahtry6c/image/upload/v1699562283/vqmaeglhtn770h2ja84w.png",
        "start_rent": "2024-07-20T17:00:00.000Z",
        "finish_rent": "2024-07-21T17:00:00.000Z",
        "created_at": "2024-07-21T00:00:00.000Z",
        "updated_at": "2024-07-21T00:00:00.000Z"
    },
    {
        "id": 2,
        "name": "xpander",
        "type": "mitsubishi",
        "price": 500000,
        "photo": "http://res.cloudinary.com/dyahtry6c/image/upload/v1699562300/nzii0sjqlgkmcpa7kvmu.png",
        "start_rent": "2024-07-20T17:00:00.000Z",
        "finish_rent": "2024-07-21T17:00:00.000Z",
        "created_at": "2024-07-21T00:00:00.000Z",
        "updated_at": "2024-07-21T00:00:00.000Z"
    }
]

** create **
## Link
```
http://localhost:3000/v1/cars/create
```

## Request body
name: xpander
type: mitsubishi
price 500000
photo: Star 1.png
start_rent: 2024-07-21
finish_rent: 2023-07-22
created_at: 2024-07-21
updated_at: 2024-07-21

## Response body
{
    "name": "xpander",
    "type": "mitsubishi",
    "price": 500000,
    "photo": "http://res.cloudinary.com/dyahtry6c/image/upload/v1699594590/sqcigg1xjicahacjq80q.png",
    "start_rent": "2024-07-20T17:00:00.000Z",
    "finish_rent": "2024-07-21T17:00:00.000Z",
    "created_at": "2024-07-21T00:00:00.000Z",
    "updated_at": "2024-07-21T00:00:00.000Z",
    "id": 3
}

** update **
## Link
```
http://localhost:3000/v1/cars/2
```

## Request body
name: xpander
type: mitsubishi
price 500000
photo: Ellipse 22.png
start_rent: 2024-07-21
finish_rent: 2023-07-22
created_at: 2024-07-21
updated_at: 2024-07-22

## Response body
1

** getById **
## Link
```
http://localhost:3000/v1/cars/2
```

## Response body
[
    {
        "id": 3,
        "name": "xpander",
        "type": "mitsubishi",
        "price": 500000,
        "photo": "http://res.cloudinary.com/dyahtry6c/image/upload/v1699595098/icohbdcfob1jxtyhtmtd.png",
        "start_rent": "2024-07-20T17:00:00.000Z",
        "finish_rent": "2024-07-21T17:00:00.000Z",
        "created_at": "2024-07-21T17:00:00.000Z",
        "updated_at": "2024-07-20T17:00:00.000Z"
    }
]

** delete **
## Link
```
http://localhost:3000/v1/cars/3
```

## Response body
{
    "status": "OK",
    "message": 1
}