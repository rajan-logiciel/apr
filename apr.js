/*!
 * Javascript APR 
 **/

function APR(amount, time, interestRrate) {
	this.amount = amount;
	this.time = time;
	this.ir   = interestRrate;
};


APR.prototype.getMonthlyAmount = function() {
	var ir = this.ir
		time = this.time;

	ir = ir*1/100;
	ir = ir/12;

	var up = ir*(Math.pow( ir+1, time))
	var dw = Math.pow( 1+ir, time)-1

	return ( this.amount * ( up / dw ) ).toFixed(2);
};
