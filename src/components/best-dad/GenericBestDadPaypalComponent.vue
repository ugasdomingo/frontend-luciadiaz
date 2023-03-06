<template>
    <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
    >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="Y6JPUR9AT5BYN" />
        <table>
            <tr>
                <td>
                    <input type="hidden" name="on0" value="Entrega:" />Entrega:
                </td>
            </tr>
            <tr>
                <td>
                    <select name="os0">
                        <option value="Digital">Digital €10,00 EUR</option>
                        <option value="Impreso">Impreso €17,00 EUR</option>
                    </select>
                </td>
            </tr>
        </table>
        <input type="hidden" name="currency_code" value="EUR" />
        <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
            border="0"
            name="submit"
            alt="PayPal, la forma rápida y segura de pagar en Internet."
        />
        <img
            alt=""
            border="0"
            src="https://www.paypalobjects.com/es_ES/i/scr/pixel.gif"
            width="1"
            height="1"
        />
    </form>
</template>
