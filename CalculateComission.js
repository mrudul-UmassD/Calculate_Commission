// CalculateComission.js has errors that need to be fixed 
function calculateCommissionFunction(lockQty, stockQty, barrelQty) {
    // Product costs
    const lockCost = 45;
    const stockCost = 30;
    const barrelCost = 25;

    // Sales limits
    const maxLocks = 70;
    const maxStocks = 80;
    const maxBarrels = 90;

    // Calculate total sales
    const totalSales = lockQty * lockCost + stockQty * stockCost + barrelQty * barrelCost;

    // Check if sales exceed any limits
    if (lockQty > maxLocks && stockQty > maxStocks && barrelQty > maxBarrels) {
        return "Sales quantities exceed maximum limits.";
    }

    // Commission rates
    let commissionRate;
    if (totalSales <= 1000) {
        commissionRate = 0.1;
    } else if (totalSales <= 1800) {
        commissionRate = 0.15;
    } else {
        commissionRate = 0.2;
    }

    // Calculate commission
    let commission = totalSales * commissionRate;

    // Subtract commission for 1 lock
    commission -= lockCost * commissionRate;

    return [totalSales,commission];
}
module.exports = calculateCommissionFunction;