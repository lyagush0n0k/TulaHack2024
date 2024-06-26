import Modal from '@/Components/Modal';
import { Link, useForm } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';

interface Props {
  visible: boolean;
  onClose: CallableFunction;
  changeModal: CallableFunction;
}

export default function RegisterModal({visible, onClose, changeModal}: Props) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    phone: '',
    password: '',
    sex: 'male',
    password_confirmation: '',
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('register'));
  };

  return (
    <Modal show={visible} onClose={() => onClose()} closeable={true}>
      <div className='p-6'>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-center">Давай начнем</h2>
        </div>
        <form onSubmit={submit}>
          <div>
            <InputLabel htmlFor="name" value="Name"/>

            <TextInput
              id="name"
              name="name"
              value={data.name}
              className="mt-1 block w-full"
              autoComplete="name"
              isFocused={true}
              onChange={(e) => setData('name', e.target.value)}
              required
            />

            <InputError message={errors.name} className="mt-2"/>
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="email" value="Email"/>

            <TextInput
              id="email"
              type="email"
              name="email"
              value={data.email}
              className="mt-1 block w-full"
              autoComplete="username"
              onChange={(e) => setData('email', e.target.value)}
              required
            />

            <InputError message={errors.email} className="mt-2"/>
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="phone" value="Phone"/>

            <TextInput
              id="phone"
              type="tel"
              name="phone"
              value={data.phone}
              className="mt-1 block w-full"
              autoComplete="phone"
              onChange={(e) => setData('phone', e.target.value)}
              required
            />

            <InputError message={errors.phone} className="mt-2"/>
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="sex" value="Пол"/>

            <select onChange={(e) => setData('sex', e.target.value)} id="sex" name="sex">
              <option value="male" selected>Мужской</option>
              <option value="female">Женский</option>
            </select>

            <InputError message={errors.sex} className="mt-2"/>
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="password" value="Password"/>

            <TextInput
              id="password"
              type="password"
              name="password"
              value={data.password}
              className="mt-1 block w-full"
              autoComplete="new-password"
              onChange={(e) => setData('password', e.target.value)}
              required
            />

            <InputError message={errors.password} className="mt-2"/>
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="password_confirmation" value="Confirm Password"/>

            <TextInput
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              value={data.password_confirmation}
              className="mt-1 block w-full"
              autoComplete="new-password"
              onChange={(e) => setData('password_confirmation', e.target.value)}
              required
            />

            <InputError message={errors.password_confirmation} className="mt-2"/>
          </div>

          <div className="flex items-center justify-end mt-4">
            <Link
              href={route('login')}
              className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Already registered?
            </Link>

            <PrimaryButton className="ms-4" disabled={processing}>
              Register
            </PrimaryButton>
          </div>
        </form>
        <div>
          Есть аккаунт? <a onClick={() => changeModal()}>Войти</a>
        </div>
      </div>

    </Modal>
  );
}
