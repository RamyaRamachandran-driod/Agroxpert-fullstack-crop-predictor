import sqlite3


def csv_clearSpaces(path, filename):

    if "." not in filename:
        filename += ".csv"

    with open(path, "r") as f:
        raw_content = f.read().split(",")
        content = []

        for i in raw_content:
            a = ""
            l = i.split()
            for j in l:
                try:
                    j = j.capitalize()
                except:
                    pass

                a += j
            content.append(a)

        new_file_content = ""

        c = 0

        for i in content:
            if c < 7:
                new_file_content += i+","
            else:
                new_file_content += "\n"
                c = 0

            c += 1

        with open(filename, "w") as f:
            f.write(new_file_content)


# def get_distinct(col):
#     li = list(set(df[col].to_list()))
#     return li


def execute_query(sql_query):
    with sqlite3.connect("datasets/data.sqlite") as conn:
        cur = conn.cursor()
        result = cur.execute(sql_query)
        conn.commit()
    return result


# print(execute_query("SELECT name FROM sqlite_temp_master WHERE type='table';").fetchall())

# Dont try to delete sql file.. Ill kill you.. Bye.. Gud night