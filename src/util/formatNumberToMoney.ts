export const formatAmount = (amount: any, includeDecimal: boolean = true) => {
    const numberAmount = Number(amount);
    
    const formattedAmount = Math.abs(numberAmount).toLocaleString('en-US');

    const parts = formattedAmount.split('.');
    const decimalPart = parts.length > 1 ? `.${parts[1].padEnd(2, '0')}` : '';

    const sign = numberAmount < 0 ? '-' : '';

    return sign + "$" + parts[0] + (includeDecimal ? decimalPart : '');
}
