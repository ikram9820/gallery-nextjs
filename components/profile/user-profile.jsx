import ImagesGrid from '../images-grid/images-grid';
import ProfileForm from './profile-form';

const images = [
  "/images/image1.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image6.jpg",
];

function UserProfile() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       window.location.href = '/auth';
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return <p className={profile}>Loading...</p>;
  // }

  async function changePasswordHandler(passwordData) {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <section className="flex flex-col">
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
      <ImagesGrid images={images}/>
    </section>
  );
}

export default UserProfile;