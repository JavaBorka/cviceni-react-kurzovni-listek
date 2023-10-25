# Cvičení 1 - kurzovní lístek (základ)

Komunikaci směrem od rodiče k dítěti si procvičíme na aplikaci, která převádí různé světové měny na české koruny.

Vytvořte si repozitář ze šablony cviceni-currencies obsahující React stránku s jednoduchým formulářem pro kurzy měn.
Pomocí npm install nainstalujte závislosti a spusťte aplikaci. Zatím nic zásadního nedělá.
Prohlédněte si připravený kód a strukturu projektu. Všimněte si komponmenty `Rate`, která zobrazuje kurz.
Do komponenty `Rate` přidejte prop `from`, která bude obsahovat kód měny, ze které chceme konvertovat na české koruny. Zařiďte, aby komponenta zobrazila kód měny, který uživatel vybere z nabídky. Toto bude komunikace od rodiče (komponenta App) k dítěti (komponenta Rate).
Upravate komponentu `Rate` tak, aby zobrazila správný kurz podle připravných dat v objektu currencies. Výslední kurz zobrazte v elementu `.rate__value.`
