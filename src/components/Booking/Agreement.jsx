const Agreement = ({ setChecked, checked }) =>
{
  return (
    <div className="flex items-center justify-center  mt-5 gap-2">
      <input

        onChange={ (e) => setChecked(e.target.checked) }
       checked={ checked }
        type="checkbox" id="agreement" name="agreement" value="agreement"/>
      <label htmlFor="agreement">
        <p>
          أوافق على استلام الجهاز خلال 30 يوم من تاريخ الطلب
        </p>
      </label>
    </div>
  );
};

export default Agreement;