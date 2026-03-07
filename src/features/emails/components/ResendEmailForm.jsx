import Button from '../../../components/common/Button';
import Select from '../../../components/common/Select';

const ResendEmailForm = ({ onSubmit }) => {
  return (
    <form className="space-y-4">
      <Select label="اختر المستخدمين" options={[]} />
      <Button type="submit">إعادة إرسال</Button>
    </form>
  );
};

export default ResendEmailForm;
