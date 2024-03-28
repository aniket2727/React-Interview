

import React, { useState } from 'react'

const Jsonhandle = () => {

    const [data,setData]=useState([{
        "users": [
          {
            "id": 1,
            "name": "John Doe",
            "age": 30,
            "email": "john@example.com",
            "address": {
              "street": "123 Main St",
              "city": "Anytown",
              "state": "NY",
              "zipcode": "12345"
            },
            "posts": [
              {
                "id": 101,
                "title": "First Post",
                "content": "This is the content of the first post."
              },
              {
                "id": 102,
                "title": "Second Post",
                "content": "This is the content of the second post."
              }
            ]
          },
          {
            "id": 2,
            "name": "Jane Smith",
            "age": 25,
            "email": "jane@example.com",
            "address": {
              "street": "456 Elm St",
              "city": "Othertown",
              "state": "CA",
              "zipcode": "67890"
            },
            "posts": [
              {
                "id": 201,
                "title": "Another Post",
                "content": "This is another post."
              }
            ]
          }
        ]
      }
      ])
  return (
    <div>
      
    </div>
  )
}

export default Jsonhandle
