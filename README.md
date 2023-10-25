# Cvičení 1 - kurzovní lístek (základ)

Komunikaci směrem od rodiče k dítěti si procvičíme na aplikaci, která převádí různé světové měny na české koruny.

Vytvořte si repozitář ze šablony cviceni-currencies obsahující React stránku s jednoduchým formulářem pro kurzy měn.

Pomocí npm install nainstalujte závislosti a spusťte aplikaci. Zatím nic zásadního nedělá.

Prohlédněte si připravený kód a strukturu projektu. Všimněte si komponmenty `Rate`, která zobrazuje kurz.

Do komponenty `Rate` přidejte prop `from`, která bude obsahovat kód měny, ze které chceme konvertovat na české koruny. Zařiďte, aby komponenta zobrazila kód měny, který uživatel vybere z nabídky. Toto bude komunikace od rodiče (komponenta App) k dítěti (komponenta Rate).

Upravate komponentu `Rate` tak, aby zobrazila správný kurz podle připravných dat v objektu currencies. Výslední kurz zobrazte v elementu `.rate__value.`


# Cvičení 2 - kurzovní lístek (API)

Jistě cítíte, že mít kurzy měn zadrátované přímo v kódu aplikace není zrovna užitečné. V tomto cvičení získáme kurzy z veřejného API jako praví profesionálové.

Chceme-li získat kurz amerického dolaru, můžeme využít následující API.

https://api.frankfurter.app/latest?from=USD&to=CZK

Prohlédněte si data, která API vrací. Zkuste do URL jako parametr `from` zadat nějakou jinou měnu, například GBP nebo CHF, a podívejte se, jak se data změní.

Upravte komponentu `Rate` tak, aby si z API stáhla správný kurz pro měnu, kterou dostane v prop `from.`

Zařiďte, aby se správná data stáhla kdykoliv, když se změní hodnota uvnitř prop `from`. K tomu budete potřebovat specializovaný `useEffect.`
