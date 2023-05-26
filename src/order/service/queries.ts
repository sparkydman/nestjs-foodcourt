export const getAllOrdersQuery = `
        SELECT *, 
            (
                SELECT array_to_json(array_agg(row_to_json(lg)))
                FROM (
                    SELECT * FROM logs
                    WHERE order_id = orders.id
                ) lg
            ) AS logs,
            (
                SELECT array_to_json(array_agg(row_to_json(otah)))
                FROM (
                    SELECT * FROM order_total_amount_history
                    WHERE order_id = orders.id
                ) otah
            ) AS order_total_amount_history,
            (
                SELECT row_to_json(co)
                FROM (
                    SELECT *,
                    (
                        SELECT row_to_json(address)
                        FROM ( 
                            SELECT * FROM address_details
                            WHERE calculated_order_id = calculated_orders.id
                        ) address 
                    ) AS address_details,
                    (
                        SELECT array_to_json(array_agg(row_to_json(m)))
                        FROM (
                            SELECT *,
                                (
                                    SELECT row_to_json(br)
                                    FROM (
                                        sELECT * FROM brands
                                        WHERE id = meals.brand_id
                                    ) br
                                )AS brand,
                                (
                                   SELECT array_to_json(array_agg(row_to_json(addn))) 
                                   FROM (
                                    SELECT * FROM meals
                                    WHERE calculated_order_id = calculated_orders.id AND is_addon = true
                                   ) addn
                                ) AS addons,
                                (
                                    SELECT array_to_json(array_agg(row_to_json(img)))
                                    FROM(
                                        SELECT url FROM images
                                        WHERE item_id = meals.id
                                    ) img
                                ) AS images
                            FROM meals
                            WHERE calculated_order_id = calculated_orders.id
                        ) m
                    ) AS meals
                    FROM calculated_orders
                    WHERE id = orders.calculated_order_id
                ) co
            ) AS calculated_order,
            (
                SELECT row_to_json(ot)
                FROM (
                    SELECT * FROM order_types
                    WHERE id = orders.order_type_id
                ) ot
            ) AS order_type
        FROM orders 
        ORDER BY created_at DESC
    `;

export const highestMealsOrderedQuery = `
       SELECT *,
       (
        SELECT row_to_json(ml)
        FROM (
            SELECT MAX(quantity) AS highest_quantity, name, id FROM meals
            WHERE calculated_order_id = calculated_orders.id
            GROUP BY id
        ) ml
       ) AS highest_meal
       FROM calculated_orders
       WHERE id = ?
    `;
