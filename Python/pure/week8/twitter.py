import re

URL = input("URL: "). strip()
if matches:= re.search(r"^https?://(?:www\.)?twitter\.com/(.+)$",URL,re.IGNORECASE):
    """
    https? allows the s in https be optional incase user types http
    ?: in (?:www\.) allows (?:www\.) not to be captured
    \. in (?:www\.) allows printing of a literal dot after www
    (?:www\.)? allows (?:www\.) to be optional that is the use of the last ?
    (.+) allows capturing of the user's username
    """
    print(f"username:", matches.group(1))