import type { CmsCheckoutBillingField } from '@workspace/shared';
import './CheckoutBillingForm.css';

type CheckoutBillingFormProps = {
  title: string;
  fields: CmsCheckoutBillingField[];
};

function renderFieldInput(field: CmsCheckoutBillingField) {
  if (field.type === 'textarea') {
    return <textarea rows={2} placeholder={field.placeholder} required={field.required} />;
  }

  if (field.type === 'select') {
    const defaultValue = field.defaultValue ?? field.options?.[0] ?? '';

    return (
      <select defaultValue={defaultValue} required={field.required}>
        {(field.options ?? [defaultValue]).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return <input type={field.type} placeholder={field.placeholder} required={field.required} />;
}

export function CheckoutBillingForm({ title, fields }: CheckoutBillingFormProps) {
  return (
    <section className="checkout-billing-form" aria-label="Billing details">
      <h2>{title}</h2>

      <form onSubmit={(event) => event.preventDefault()}>
        <div className="checkout-billing-grid">
          {fields.map((field) => (
            <label key={field.id} className={field.halfWidth ? 'is-half' : 'is-full'}>
              <span>{field.label}</span>
              {renderFieldInput(field)}
            </label>
          ))}
        </div>
      </form>
    </section>
  );
}
