const emi = {
    principal_amount: 0,
    N_tenure_in_months: 0,
    R_interest_rate: 0,
    calculate_emi(){
        // P x R x (1+R)^N / [(1+R)^N-1]
        const result =  this.principal_amount*this.R_interest_rate*((Math.pow((1+this.R_interest_rate),this.N_tenure_in_months)) / (Math.pow((1+this.R_interest_rate),this.N_tenure_in_months)-1));
        return result;
    }
}
export default emi;