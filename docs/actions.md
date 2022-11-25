***

# open

### Parameters:
* @param owner - owner of the account
* @param symbol - token symbol
* @param ram_payer - ram payer

### Description:

Open zero balance account.

### Required Authorization:

**ram_payer** account.

***

# close

### Parameters:

* @param owner - owner of the account
* @param symbol - token symbol

### Description:

Close zero balance account.

### Required Authorization:

**owner** account.

***

***

# create

### Parameters:

* @param issuer - issuer account
* @param maximum_supply - maximum supply of the token

### Description:

Create new token.

### Required Authorization:

**contract** account.

***

***

# issue

### Parameters:

* @param to - receiver of tokens
* @param quantity - quantity of tokens
* @param memo - memo description

### Description:

Issue new tokens.

### Required Authorization:

**issuer** account.

***

***

# retire

### Parameters:

* @param quantity - quantity of deflate
* @param memo - memo description

### Description:

Burn tokens.

### Required Authorization:

**issuer** account.

***

***

# transfer

### Parameters:

* @param from - sender
* @param to - receiver
* @param quantity - quantiy of tokens
* @param memo - memo description

### Description:

Transfer tokens.

### Required Authorization:

**from** account.

***

***

# mine

### Parameters:

### Description:

Issuer new tokens depends on the current price of the DEX.

### Required Authorization:

**any** account.

***

***

# addShareholder

### Parameters:

* @param account - shareholder account
* @param value - share in bps

### Description:

Add sharegolder account.

### Required Authorization:

**contract** account.

***