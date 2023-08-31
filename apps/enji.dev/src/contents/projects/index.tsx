import clsx from 'clsx';
import { useState } from 'react';

import { GitHubIcon, NpmIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';
import NpmWireframe from '@/components/wireframes/Npm';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'github'>('github');

  return (
    <>
      <SectionTitle
        title="A netflix front-end demo"
        caption="Netflix front-end demo"
        description="MERN Stack Project | React Project | Netflix Clone with React, Redux Toolkit, Nodejs, MongoDB."
        button={{
          title: 'learn more',
          href: '/docs/netflixfront-enddemo',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Available on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Access powerful and flexible package on GitHub with MIT license."
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />
{/*               <SectionButton
                title="npm package"
                icon={<NpmIcon className={clsx('my-2 h-16 w-16')} />}
                description="Install and use the package with ease thanks to its typed options."
                active={currentState === 'npm'}
                onClick={() => setCurrentState('npm')}
              /> */}
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'annalovecode/react netflix - GitHub',
                      isActive: currentState === 'github',
                    },
                    // {
                    //   icon: <NpmIcon className="h-4 w-4" />,
                    //   title: 'tailwindcss-accent - npm',
                    //   isActive: currentState === 'npm',
                    // },
                  ]}
                >
                  {currentState === 'github' && (
                    <GitHubWireframe
                      author="annazhao"
                      license="MIT"
                      repository="reactnetflix"
                      description="MERN Stack Project | React Project | Netflix Clone with React, Redux Toolkit, Nodejs, MongoDB."
                    />
                  )}
{/*                   {currentState === 'npm' && (
                    <NpmWireframe
                      packageName="tailwindcss-accent"
                      description="Adds accent colors for more dynamic and flexible color utilization."
                      isWithTypeScript
                    />
                  )} */}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
        <SectionTitle
        title="A netflix front-end demo"
        caption="Netflix front-end demo"
        description="MERN Stack Project | React Project | Netflix Clone with React, Redux Toolkit, Nodejs, MongoDB."
        button={{
          title: 'learn more',
          href: '/docs/netflixfront-enddemo',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Available on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Access powerful and flexible package on GitHub with MIT license."
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />
{/*               <SectionButton
                title="npm package"
                icon={<NpmIcon className={clsx('my-2 h-16 w-16')} />}
                description="Install and use the package with ease thanks to its typed options."
                active={currentState === 'npm'}
                onClick={() => setCurrentState('npm')}
              /> */}
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'annalovecode/react netflix - GitHub',
                      isActive: currentState === 'github',
                    },
                    // {
                    //   icon: <NpmIcon className="h-4 w-4" />,
                    //   title: 'tailwindcss-accent - npm',
                    //   isActive: currentState === 'npm',
                    // },
                  ]}
                >
                  {currentState === 'github' && (
                    <GitHubWireframe
                      author="annazhao"
                      license="MIT"
                      repository="reactnetflix"
                      description="MERN Stack Project | React Project | Netflix Clone with React, Redux Toolkit, Nodejs, MongoDB."
                    />
                  )}
{/*                   {currentState === 'npm' && (
                    <NpmWireframe
                      packageName="tailwindcss-accent"
                      description="Adds accent colors for more dynamic and flexible color utilization."
                      isWithTypeScript
                    />
                  )} */}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
