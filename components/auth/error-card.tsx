import { CardWrapper } from '@/components/auth/card-wraper';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops! something went wrong"
      backButtonHref="/auth/login"
      backButtonLabel="Back to lgoin"
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
}

export default ErrorCard;
